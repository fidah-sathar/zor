package zor_backend;

import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;

    public OrderController(
        OrderRepository orderRepository,
        CartRepository cartRepository
    ) {
        this.orderRepository = orderRepository;
        this.cartRepository = cartRepository;
    }

    @PostMapping("/from-cart/{cartId}")
    public Order createOrderFromCart(@PathVariable Long cartId) {

        Cart cart = cartRepository.findById(cartId)
            .orElseThrow(() -> new RuntimeException("Cart not found"));

        if (cart.getItems().isEmpty()) {
            throw new RuntimeException("Cannot create order from empty cart");
        }

        Order order = new Order();

        order.setCreatedAt(LocalDateTime.now());
        order.setStatus("PENDING");

        double total = 0;

        for (CartItem cartItem : cart.getItems()) {

            double itemPrice = cartItem.getProduct().getPrice();

            OrderItem orderItem = new OrderItem(
                cartItem.getProduct(),
                cartItem.getSize(),
                cartItem.getQuantity(),
                itemPrice
            );

            order.addItem(orderItem);

            total += itemPrice * cartItem.getQuantity();
        }

        order.setTotal(total);

        return orderRepository.save(order);
    }

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {

        return orderRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Order not found"));
    }
}