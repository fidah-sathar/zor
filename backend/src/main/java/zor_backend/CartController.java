package zor_backend;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = {"http://localhost:5173", "https://zor-clothing.onrender.com"})
public class CartController {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;

    public CartController(
        CartRepository cartRepository,
        ProductRepository productRepository
    ) {
        this.cartRepository = cartRepository;
        this.productRepository = productRepository;
    }

    @GetMapping("/{cartId}")
    public Cart getCart(@PathVariable Long cartId) {
        return cartRepository.findById(cartId)
            .orElseThrow(() -> new RuntimeException("Cart not found"));
    }

    @PostMapping
    public Cart createCart() {
        Cart cart = new Cart();
        return cartRepository.save(cart);
    }

    @PostMapping("/{cartId}/items")
    public Cart addItem(
        @PathVariable Long cartId,
        @RequestBody CartItemRequest request
    ) {
        Cart cart = cartRepository.findById(cartId)
            .orElseThrow(() -> new RuntimeException("Cart not found"));

        Product product = productRepository.findById(request.productId())
            .orElseThrow(() -> new RuntimeException("Product not found"));

        for (CartItem item : cart.getItems()) {

            if (
                item.getProduct().getId().equals(product.getId())
                && item.getSize().equalsIgnoreCase(request.size())
            ) {
                item.setQuantity(item.getQuantity() + request.quantity());
                return cartRepository.save(cart);
            }
        }

        CartItem newItem = new CartItem(
            product,
            request.size(),
            request.quantity()
        );

        cart.addItem(newItem);

        return cartRepository.save(cart);
    }

    @PutMapping("/{cartId}/items/{itemId}")
    public Cart updateQuantity(
        @PathVariable Long cartId,
        @PathVariable Long itemId,
        @RequestBody QuantityRequest request
    ) {
        Cart cart = cartRepository.findById(cartId)
            .orElseThrow(() -> new RuntimeException("Cart not found"));

        CartItem item = cart.getItems()
            .stream()
            .filter(cartItem -> cartItem.getId().equals(itemId))
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Cart item not found"));

        if (request.quantity() <= 0) {
            cart.removeItem(item);
        } else {
            item.setQuantity(request.quantity());
        }

        return cartRepository.save(cart);
    }

    @DeleteMapping("/{cartId}/items/{itemId}")
    public Cart removeItem(
        @PathVariable Long cartId,
        @PathVariable Long itemId
    ) {
        Cart cart = cartRepository.findById(cartId)
            .orElseThrow(() -> new RuntimeException("Cart not found"));

        CartItem item = cart.getItems()
            .stream()
            .filter(cartItem -> cartItem.getId().equals(itemId))
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Cart item not found"));

        cart.removeItem(item);

        return cartRepository.save(cart);
    }

    @DeleteMapping("/{cartId}")
    public Cart clearCart(@PathVariable Long cartId) {
        Cart cart = cartRepository.findById(cartId)
            .orElseThrow(() -> new RuntimeException("Cart not found"));

        cart.getItems().clear();

        return cartRepository.save(cart);
    }

    public record CartItemRequest(
        Long productId,
        String size,
        int quantity
    ) {
    }

    public record QuantityRequest(
        int quantity
    ) {
    }
}

