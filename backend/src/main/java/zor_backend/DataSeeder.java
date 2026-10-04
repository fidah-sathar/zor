package zor_backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataSeeder {

    private static final List<String> CLOTHING_SIZES =
        List.of("S", "M", "L", "XL");

    private static final List<String> ONE_SIZE =
        List.of("ONE SIZE");

    @Bean
    CommandLineRunner seedProducts(ProductRepository repository) {
        return args -> {
            upsert(
                repository,
                "Relaxed Cotton Tee",
                "T-SHIRTS",
                1499,
                "Off White",
                "/products/tshirt-6.png",
                "A heavyweight everyday tee with a clean relaxed silhouette.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Heavyweight Box Tee",
                "T-SHIRTS",
                1699,
                "Charcoal",
                "/products/tshirt-5.png",
                "A washed heavyweight tee with an oversized boxy fit.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Soft Linen Shirt",
                "SHIRTS",
                2199,
                "Sage",
                "/products/shirt-2.png",
                "A lightweight linen shirt with an easy relaxed finish.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Relaxed Oxford Shirt",
                "SHIRTS",
                2399,
                "Off White",
                "/products/shirt-5.png",
                "A relaxed striped shirt with a refined everyday profile.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Straight Leg Trousers",
                "TROUSERS",
                2499,
                "Taupe",
                "/products/pant-6.png",
                "Clean straight-leg trousers with an easy contemporary shape.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Relaxed Pleated Trousers",
                "TROUSERS",
                2699,
                "Cream",
                "/products/pant-1.png",
                "Relaxed pleated trousers with a soft tailored silhouette.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Everyday Overshirt",
                "OUTERWEAR",
                2899,
                "Taupe",
                "/products/jacket-5.png",
                "A versatile overshirt designed for effortless layering.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Structured Jacket",
                "OUTERWEAR",
                3499,
                "Dark Brown",
                "/products/jacket-1.png",
                "A structured jacket with a refined contemporary profile.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Minimal Leather Belt",
                "ACCESSORIES",
                999,
                "Brown",
                "/products/acc-6.png",
                "A minimal leather belt designed for everyday styling.",
                ONE_SIZE
            );

            upsert(
                repository,
                "Everyday Cap",
                "ACCESSORIES",
                899,
                "Navy",
                "/products/acc-3.png",
                "A clean everyday cap with an understated finish.",
                ONE_SIZE
            );

            upsert(
                repository,
                "Relaxed Long-Sleeve Tee",
                "T-SHIRTS",
                1799,
                "Blue",
                "/products/tshirt-1.png",
                "A relaxed long-sleeve tee with an easy everyday fit.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Soft Grey Long-Sleeve Tee",
                "T-SHIRTS",
                1699,
                "Grey",
                "/products/tshirt-2.png",
                "A soft long-sleeve tee in a muted grey tone.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Textured Sand Tee",
                "T-SHIRTS",
                1899,
                "Sand",
                "/products/tshirt-3.png",
                "A textured short-sleeve tee with a relaxed silhouette.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Everyday Cream Tee",
                "T-SHIRTS",
                1599,
                "Cream",
                "/products/tshirt-4.png",
                "A clean cream tee made for simple everyday dressing.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Navy Linen Shirt",
                "SHIRTS",
                2299,
                "Navy",
                "/products/shirt-3.png",
                "A textured navy shirt with a relaxed modern cut.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Relaxed Navy Shirt",
                "SHIRTS",
                2399,
                "Navy",
                "/products/shirt-4.png",
                "An easy navy shirt with a soft structured finish.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Pinstripe Zip Shirt",
                "SHIRTS",
                2499,
                "White",
                "/products/shirt-6.png",
                "A modern pinstripe zip shirt with a relaxed fit.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Classic Sage Shirt",
                "SHIRTS",
                2199,
                "Sage",
                "/products/shirt-1.png",
                "A lightweight sage shirt with clean everyday proportions.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Straight Cream Trousers",
                "TROUSERS",
                2499,
                "Cream",
                "/products/pant-2.png",
                "Relaxed cream trousers with a clean straight-leg profile.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Textured Black Trousers",
                "TROUSERS",
                2599,
                "Black",
                "/products/pant-3.png",
                "Textured black trousers with a relaxed contemporary fit.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Relaxed Denim Trousers",
                "TROUSERS",
                2799,
                "Light Blue",
                "/products/pant-4.png",
                "Relaxed light-wash denim with an easy straight shape.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Classic Blue Denim",
                "TROUSERS",
                2799,
                "Blue",
                "/products/pant-5.png",
                "Classic blue denim with a clean everyday silhouette.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Utility Black Jacket",
                "OUTERWEAR",
                3299,
                "Black",
                "/products/jacket-3.png",
                "A lightweight utility jacket with a modern technical edge.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Cream Cropped Jacket",
                "OUTERWEAR",
                3399,
                "Cream",
                "/products/jacket-4.png",
                "A clean cropped jacket in a soft neutral tone.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Half-Zip Sand Sweatshirt",
                "OUTERWEAR",
                2999,
                "Sand",
                "/products/jacket-6.png",
                "A refined half-zip layer with a relaxed everyday fit.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Relaxed Cream Jacket",
                "OUTERWEAR",
                3299,
                "Cream",
                "/products/jacket-2.png",
                "A clean cream jacket designed for easy layering.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Silver Ring Set",
                "ACCESSORIES",
                799,
                "Silver",
                "/products/acc-1.png",
                "A minimal set of silver-toned rings for everyday styling.",
                ONE_SIZE
            );

            upsert(
                repository,
                "Silver Band Set",
                "ACCESSORIES",
                699,
                "Silver",
                "/products/acc-2.png",
                "A clean set of understated silver-toned bands.",
                ONE_SIZE
            );

            upsert(
                repository,
                "Tortoise Sunglasses",
                "ACCESSORIES",
                1199,
                "Brown",
                "/products/acc-4.png",
                "Classic sunglasses with a warm tortoise-toned frame.",
                ONE_SIZE
            );

            upsert(
                repository,
                "Amber Sunglasses",
                "ACCESSORIES",
                1199,
                "Amber",
                "/products/acc-5.png",
                "Refined sunglasses with a warm amber-toned frame.",
                ONE_SIZE
            );;

            System.out.println("ZOR products synced successfully.");
        };
    }

    private void upsert(
        ProductRepository repository,
        String name,
        String category,
        double price,
        String color,
        String image,
        String description,
        List<String> sizes
    ) {
        Product product = repository.findByName(name)
            .orElseGet(Product::new);

        product.setName(name);
        product.setCategory(category);
        product.setPrice(price);
        product.setColor(color);
        product.setImage(image);
        product.setDescription(description);
        product.setSizes(sizes);

        repository.save(product);
    }
}
