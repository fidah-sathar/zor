package zor_backend;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private double price;

    private String color;

    @Column(length = 2000)
    private String image;

    @Column(length = 1000)
    private String description;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
        name = "product_sizes",
        joinColumns = @JoinColumn(name = "product_id")
    )
    @Column(name = "size")
    private List<String> sizes = new ArrayList<>();

    public Product() {
    }

    public Product(
        String name,
        String category,
        double price,
        String color,
        String image,
        String description,
        List<String> sizes
    ) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.color = color;
        this.image = image;
        this.description = description;
        this.sizes = sizes;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public double getPrice() {
        return price;
    }

    public String getColor() {
        return color;
    }

    public String getImage() {
        return image;
    }

    public String getDescription() {
        return description;
    }

    public List<String> getSizes() {
        return sizes;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setSizes(List<String> sizes) {
        this.sizes = sizes;
    }
}
