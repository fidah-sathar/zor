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
                "Stone",
                "https://images.unsplash.com/photo-1614492025699-2a9ea5b8c58b?auto=format&fit=crop&w=1200&q=85",
                "A relaxed everyday cotton tee with a clean contemporary silhouette.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Heavyweight Box Tee",
                "T-SHIRTS",
                1699,
                "Black",
                "https://images.riverisland.com/image/upload/t_ProductImagePortraitSmall/f_auto/q_auto/373204_main?%24retina%24=&cc=",
                "A structured heavyweight tee with an oversized boxy fit.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Soft Linen Shirt",
                "SHIRTS",
                2199,
                "Natural",
                "https://fashionsnap-assets.com/asset/format%3Dauto%2Cwidth%3D2000/collection/images/2022/09/IRENISA-2023ss-025.jpg",
                "A lightweight linen shirt designed for an effortless everyday look.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Relaxed Oxford Shirt",
                "SHIRTS",
                2399,
                "Off White",
                "https://www.thefashionisto.com/wp-content/uploads/2024/03/COS-Men-Spring-2024-006.jpg",
                "A relaxed Oxford shirt with a refined minimal finish.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Straight Leg Trousers",
                "TROUSERS",
                2499,
                "Taupe",
                "https://cdn.endource.com/image/ad5e478e9fc3e6fffb2cacabdab928a8/detail/cos-lightweight-hooded-jacket.jpg?class=1600&optimizer=image",
                "Clean straight-leg trousers with a versatile contemporary shape.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Relaxed Pleated Trousers",
                "TROUSERS",
                2699,
                "Brown",
                "https://noconcept.ru/uploads/thumbs/20260503noconcept1064-1-2-829df93092-d8858526506688d754af02e99a1ede63.jpeg",
                "Relaxed pleated trousers with a tailored yet comfortable silhouette.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Everyday Overshirt",
                "OUTERWEAR",
                2899,
                "Olive",
                "https://images.riverisland.com/image/upload/t_ProductImagePortraitSmall/f_auto/q_auto/373204_main?%24retina%24=&cc=",
                "A versatile overshirt designed for layering throughout the day.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Structured Jacket",
                "OUTERWEAR",
                3499,
                "Dark Brown",
                "https://www.thefashionisto.com/wp-content/uploads/2024/03/COS-Men-Spring-2024-006.jpg",
                "A structured jacket with a refined contemporary profile.",
                CLOTHING_SIZES
            );

            upsert(
                repository,
                "Minimal Leather Belt",
                "ACCESSORIES",
                999,
                "Brown",
                "https://images.rawpixel.com/image_social_portrait/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8yOV9waG90b19zdHVkaW9fc2hvdF9vZl9tZW5fd2Vhcl9taW5pbWFsX2Zhc2hpb185YWRiYWU5ZS1hMDkyLTQ4MWUtYmNlYS01MjAwOTI3N2ZkMTRfMS5qcGc.jpg",
                "A minimal leather belt designed to complement everyday looks.",
                ONE_SIZE
            );

            upsert(
                repository,
                "Everyday Cap",
                "ACCESSORIES",
                899,
                "Stone",
                "https://noconcept.ru/uploads/thumbs/20260503noconcept1064-1-2-829df93092-d8858526506688d754af02e99a1ede63.jpeg",
                "A clean everyday cap with a minimal understated finish.",
                ONE_SIZE
            );

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
