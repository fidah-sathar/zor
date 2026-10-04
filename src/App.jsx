import { Link, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const CART_API = "http://localhost:8080/api/cart";

const fallbackProducts = [
  {
    id: 1,
    name: "Relaxed Cotton Tee",
    category: "T-SHIRTS",
    price: 1499,
    color: "Off White",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/tshirt-6.png",
  },
  {
    id: 2,
    name: "Heavyweight Box Tee",
    category: "T-SHIRTS",
    price: 1699,
    color: "Charcoal",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/tshirt-5.png",
  },
  {
    id: 3,
    name: "Soft Linen Shirt",
    category: "SHIRTS",
    price: 2199,
    color: "Sage",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/shirt-2.png",
  },
  {
    id: 4,
    name: "Relaxed Oxford Shirt",
    category: "SHIRTS",
    price: 2399,
    color: "Off White",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/shirt-5.png",
  },
  {
    id: 5,
    name: "Straight Leg Trousers",
    category: "TROUSERS",
    price: 2499,
    color: "Taupe",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/pant-6.png",
  },
  {
    id: 6,
    name: "Relaxed Pleated Trousers",
    category: "TROUSERS",
    price: 2699,
    color: "Cream",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/pant-1.png",
  },
  {
    id: 7,
    name: "Everyday Overshirt",
    category: "OUTERWEAR",
    price: 2899,
    color: "Taupe",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/jacket-5.png",
  },
  {
    id: 8,
    name: "Structured Jacket",
    category: "OUTERWEAR",
    price: 3499,
    color: "Dark Brown",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/jacket-1.png",
  },
  {
    id: 9,
    name: "Minimal Leather Belt",
    category: "ACCESSORIES",
    price: 999,
    color: "Brown",
    sizes: ["ONE SIZE"],
    image: "/products/acc-6.png",
  },
  {
    id: 10,
    name: "Everyday Cap",
    category: "ACCESSORIES",
    price: 899,
    color: "Navy",
    sizes: ["ONE SIZE"],
    image: "/products/acc-3.png",
  },
  {
    id: 11,
    name: "Relaxed Long-Sleeve Tee",
    category: "T-SHIRTS",
    price: 1799,
    color: "Blue",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/tshirt-1.png",
  },
  {
    id: 12,
    name: "Soft Grey Long-Sleeve Tee",
    category: "T-SHIRTS",
    price: 1699,
    color: "Grey",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/tshirt-2.png",
  },
  {
    id: 13,
    name: "Textured Sand Tee",
    category: "T-SHIRTS",
    price: 1899,
    color: "Sand",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/tshirt-3.png",
  },
  {
    id: 14,
    name: "Everyday Cream Tee",
    category: "T-SHIRTS",
    price: 1599,
    color: "Cream",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/tshirt-4.png",
  },
  {
    id: 15,
    name: "Navy Linen Shirt",
    category: "SHIRTS",
    price: 2299,
    color: "Navy",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/shirt-3.png",
  },
  {
    id: 16,
    name: "Relaxed Navy Shirt",
    category: "SHIRTS",
    price: 2399,
    color: "Navy",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/shirt-4.png",
  },
  {
    id: 17,
    name: "Pinstripe Zip Shirt",
    category: "SHIRTS",
    price: 2499,
    color: "White",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/shirt-6.png",
  },
  {
    id: 18,
    name: "Classic Sage Shirt",
    category: "SHIRTS",
    price: 2199,
    color: "Sage",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/shirt-1.png",
  },
  {
    id: 19,
    name: "Straight Cream Trousers",
    category: "TROUSERS",
    price: 2499,
    color: "Cream",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/pant-2.png",
  },
  {
    id: 20,
    name: "Textured Black Trousers",
    category: "TROUSERS",
    price: 2599,
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/pant-3.png",
  },
  {
    id: 21,
    name: "Relaxed Denim Trousers",
    category: "TROUSERS",
    price: 2799,
    color: "Light Blue",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/pant-4.png",
  },
  {
    id: 22,
    name: "Classic Blue Denim",
    category: "TROUSERS",
    price: 2799,
    color: "Blue",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/pant-5.png",
  },
  {
    id: 23,
    name: "Utility Black Jacket",
    category: "OUTERWEAR",
    price: 3299,
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/jacket-3.png",
  },
  {
    id: 24,
    name: "Cream Cropped Jacket",
    category: "OUTERWEAR",
    price: 3399,
    color: "Cream",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/jacket-4.png",
  },
  {
    id: 25,
    name: "Half-Zip Sand Sweatshirt",
    category: "OUTERWEAR",
    price: 2999,
    color: "Sand",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/jacket-6.png",
  },
  {
    id: 26,
    name: "Relaxed Cream Jacket",
    category: "OUTERWEAR",
    price: 3299,
    color: "Cream",
    sizes: ["S", "M", "L", "XL"],
    image: "/products/jacket-2.png",
  },
  {
    id: 27,
    name: "Silver Ring Set",
    category: "ACCESSORIES",
    price: 799,
    color: "Silver",
    sizes: ["ONE SIZE"],
    image: "/products/acc-1.png",
  },
  {
    id: 28,
    name: "Silver Band Set",
    category: "ACCESSORIES",
    price: 699,
    color: "Silver",
    sizes: ["ONE SIZE"],
    image: "/products/acc-2.png",
  },
  {
    id: 29,
    name: "Tortoise Sunglasses",
    category: "ACCESSORIES",
    price: 1199,
    color: "Brown",
    sizes: ["ONE SIZE"],
    image: "/products/acc-4.png",
  },
  {
    id: 30,
    name: "Amber Sunglasses",
    category: "ACCESSORIES",
    price: 1199,
    color: "Amber",
    sizes: ["ONE SIZE"],
    image: "/products/acc-5.png",
  }
];

function Navbar({ bagCount, wishlistCount, onSearch, onWishlist, onBag }) {
  return (
    <header className="shop-nav">
      <div className="shop-nav-left">
        <Link to="/shop">Shop</Link>
        <Link to="/shop">New in</Link>
      </div>

      <Link to="/" className="shop-logo">
        ZOR
      </Link>

      <div className="shop-nav-right">
        <button className="nav-action" onClick={onSearch}>
          Search
        </button>

        <button className="nav-action nav-wishlist" onClick={onWishlist}>
          Wishlist ({wishlistCount})
        </button>

        <button className="nav-action nav-bag" onClick={onBag}>
          Bag ({bagCount})
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="home-footer">
      <div className="home-footer-main">
        <Link to="/" className="footer-logo">
          ZOR
        </Link>

        <div className="footer-column">
          <span>Explore</span>
          <Link to="/shop">Shop</Link>
          <Link to="/shop">New in</Link>
          <Link to="/bag">Bag</Link>
        </div>

        <div className="footer-column">
          <span>Categories</span>
          <Link to="/shop/t-shirts">T-Shirts</Link>
          <Link to="/shop/shirts">Shirts</Link>
          <Link to="/shop/trousers">Trousers</Link>
          <Link to="/shop/outerwear">Outerwear</Link>
        </div>

        <div className="footer-column">
          <span>ZOR</span>
          <p>
            Contemporary menswear
            <br />
            made for everyday life.
          </p>
        </div>
      </div>

      <div className="home-footer-bottom">
        <span>© 2026 ZOR</span>
        <span>Contemporary menswear</span>
      </div>
    </footer>
  );
}

function Home({ products, bagCount, wishlist, toggleWishlist, openQuickView, onSearch, onWishlist, onBag }) {
  const [hoveredModel, setHoveredModel] = useState(null);
  const heroRef = useRef(null);

  return (
    <div className="zor-home">
      <Navbar
        bagCount={bagCount}
        wishlistCount={wishlist.length}
        onSearch={onSearch}
        onWishlist={onWishlist}
        onBag={onBag}
      />

      <section className="home-hero" ref={heroRef}>
        <div className="hero-campaign">
          <div className="hero-editorial-type hero-editorial-type-back" aria-hidden="true">
            <span>Everyday</span>
            <span>essentials.</span>
          </div>

          <div className="hero-editorial-type hero-editorial-type-front" aria-hidden="true">
            <span>Everyday</span>
            <span>essentials.</span>
          </div>

          <div className="hero-copy hero-copy-left">
            <span>CONTEMPORARY</span>
            <span>MENSWEAR</span>
            <span>FOR EVERYDAY</span>
          </div>

          <div className="hero-copy hero-copy-right">
            <span>MADE</span>
            <span>FOR</span>
            <span>EVERYDAY</span>
            <span>WEAR</span>
          </div>

          <div className="hero-season">
            SS 2026
            <i />
          </div>

          <div className="hero-models">
            <div
              className={`hero-model hero-model-left ${
                hoveredModel && hoveredModel !== "left"
                  ? "is-dimmed"
                  : ""
              }`}
              onMouseEnter={() => setHoveredModel("left")}
              onMouseLeave={() => setHoveredModel(null)}
            >
              <img src="/zor-left.png" alt="ZOR menswear model" />
            </div>

            <div
              className={`hero-model hero-model-middle ${
                hoveredModel && hoveredModel !== "middle"
                  ? "is-dimmed"
                  : ""
              }`}
              onMouseEnter={() => setHoveredModel("middle")}
              onMouseLeave={() => setHoveredModel(null)}
            >
              <img src="/zor-middle.png" alt="ZOR menswear model" />
            </div>

            <div
              className={`hero-model hero-model-right ${
                hoveredModel && hoveredModel !== "right"
                  ? "is-dimmed"
                  : ""
              }`}
              onMouseEnter={() => setHoveredModel("right")}
              onMouseLeave={() => setHoveredModel(null)}
            >
              <img src="/zor-right.png" alt="ZOR menswear model" />
            </div>
          </div>

          <div className="hero-title">
            <span className="hero-title-eyebrow">ZOR / 01</span>
            <h1>
              Everyday
              <br />
              <em>essentials.</em>
            </h1>
          </div>

          <Link to="/shop" className="hero-shop-button">
            <span>Shop now</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <section className="category-strip">
        <span className="category-label">Shop</span>

        <div className="category-links">
          <Link to="/shop" className="active">All</Link>
          <Link to="/shop/t-shirts">T-Shirts</Link>
          <Link to="/shop/shirts">Shirts</Link>
          <Link to="/shop/trousers">Trousers</Link>
          <Link to="/shop/outerwear">Outerwear</Link>
          <Link to="/shop/accessories">Accessories</Link>
        </div>
      </section>

      <section className="home-new">
        <div className="section-heading">
          <div>
            <span className="eyebrow">New in</span>
            <h2>New arrivals</h2>
          </div>

          <Link to="/shop" className="text-link">
            View all <span>↗</span>
          </Link>
        </div>

        <div className="home-product-grid">
          {products.slice(0, 4).map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              className="home-product"
              key={product.id}
            >
              <div className="home-product-image">
                <img src={product.image} alt={product.name} />

                <div className="home-product-topline">
                  <span>0{index + 1} / 04</span>
                  <span>{product.category}</span>
                </div>

                <button
                  className={`product-heart ${wishlist.includes(product.id) ? "active" : ""}`}
                  aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                >
                  {wishlist.includes(product.id) ? "♥" : "♡"}
                </button>

                <button
                  className="quick-view-trigger"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    openQuickView(product);
                  }}
                >
                  Quick view
                </button>

                <span className="home-product-view">
                  View piece <span>↗</span>
                </span>
              </div>

              <div className="home-product-info">
                <div>
                  <span>{product.name}</span>
                  <small>{product.color}</small>
                </div>

                <span>₹{product.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-statement">
        <div className="statement-meta">
          <span>01 / 03</span>
          <span>ZOR / THE EVERYDAY WARDROBE</span>
        </div>

        <div className="statement-main">
          <span className="eyebrow">Designed for everyday</span>

          <h2>
            Made to be
            <br />
            <em>worn.</em>
          </h2>

          <div className="statement-rule" />

          <div className="statement-bottom">
            <p>
              Relaxed shapes, restrained colours and
              considered details. Pieces designed to move
              easily through the everyday.
            </p>

            <Link to="/shop" className="statement-arrow">
              <span>Explore the wardrobe</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="statement-side">
          <div className="statement-orbit">
            <span>FORM</span>
            <span>FUNCTION</span>
            <span>EVERYDAY</span>
          </div>

          <div className="statement-side-copy">
            <span>01</span>
            <p>
              Clean silhouettes.
              <br />
              Easy proportions.
              <br />
              Quiet character.
            </p>
          </div>
        </div>
      </section>

      <section className="home-secondary">
        <div className="section-heading">
          <div>
            <span className="eyebrow">The wardrobe</span>
            <h2>Built to wear.</h2>
          </div>

          <Link to="/shop" className="text-link">
            Shop all <span>↗</span>
          </Link>
        </div>

        <div className="secondary-editorial">
          <Link to="/product/5" className="secondary-large">
            <div className="secondary-image">
              <img
                src={products[4].image}
                alt={products[4].name}
              />
            </div>

            <div className="secondary-info">
              <span>{products[4].name}</span>
              <span>₹{products[4].price}</span>
            </div>
          </Link>

          <div className="secondary-side">
            <Link to="/product/6" className="secondary-small">
              <div className="secondary-image">
                <img
                  src={products[5].image}
                  alt={products[5].name}
                />
              </div>

              <div className="secondary-info">
                <span>{products[5].name}</span>
                <span>₹{products[5].price}</span>
              </div>
            </Link>

            <Link to="/product/8" className="secondary-small">
              <div className="secondary-image">
                <img
                  src={products[7].image}
                  alt={products[7].name}
                />
              </div>

              <div className="secondary-info">
                <span>{products[7].name}</span>
                <span>₹{products[7].price}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-final">
        <img
          src="/products/jacket-3.png"
          alt="ZOR menswear"
        />

        <div className="home-final-content">
          <div>
            <span className="eyebrow">ZOR</span>

            <h2>
              Quietly
              <br />
              considered.
            </h2>
          </div>

          <Link to="/shop" className="light-link">
            Shop all <span>↗</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Shop({ products, bagCount, wishlist, toggleWishlist, openQuickView, onSearch, onWishlist, onBag }) {
  const { category: categorySlug } = useParams();
  const [sort, setSort] = useState("FEATURED");

  const categoryMap = {
    "t-shirts": "T-SHIRTS",
    shirts: "SHIRTS",
    trousers: "TROUSERS",
    outerwear: "OUTERWEAR",
    accessories: "ACCESSORIES",
  };

  const categories = [
    { label: "ALL", slug: "/shop" },
    { label: "T-SHIRTS", slug: "/shop/t-shirts" },
    { label: "SHIRTS", slug: "/shop/shirts" },
    { label: "TROUSERS", slug: "/shop/trousers" },
    { label: "OUTERWEAR", slug: "/shop/outerwear" },
    { label: "ACCESSORIES", slug: "/shop/accessories" },
  ];

  const category = categoryMap[categorySlug] || "ALL";

  const filteredProducts = useMemo(() => {
    let result =
      category === "ALL"
        ? [...products]
        : products.filter(
            (product) => product.category === category
          );

    if (sort === "LOW") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "HIGH") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "NAME") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [category, sort, products]);

  return (
    <div className="store-page">
      <Navbar
        bagCount={bagCount}
        wishlistCount={wishlist.length}
        onSearch={onSearch}
        onWishlist={onWishlist}
        onBag={onBag}
      />

      <main className="shop-page">
        <div className="shop-heading">
          <div>
            <span className="eyebrow">ZOR</span>
            <h1>Shop</h1>
          </div>

          <p>
            Contemporary essentials
            <br />
            for everyday dressing.
          </p>
        </div>

        <div className="shop-controls">
          <div className="shop-categories">
            {categories.map((item) => (
              <Link
                key={item.label}
                to={item.slug}
                className={category === item.label ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="shop-sort">
            <label htmlFor="sort">Sort</label>

            <select
              id="sort"
              value={sort}
              onChange={(event) =>
                setSort(event.target.value)
              }
            >
              <option value="FEATURED">Featured</option>
              <option value="LOW">Price: Low to high</option>
              <option value="HIGH">Price: High to low</option>
              <option value="NAME">Name</option>
            </select>
          </div>
        </div>

        <div className="shop-result-row">
          <span>
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "piece"
              : "pieces"}
          </span>

          <span>
            {category === "ALL" ? "All products" : category}
          </span>
        </div>

        <div className="shop-grid">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              className="store-product-card"
              key={product.id}
            >
              <div className="store-product-image">
                <img src={product.image} alt={product.name} />

                <button
                  className={`product-heart ${wishlist.includes(product.id) ? "active" : ""}`}
                  aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                >
                  {wishlist.includes(product.id) ? "♥" : "♡"}
                </button>

                <button
                  className="quick-view-trigger"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    openQuickView(product);
                  }}
                >
                  Quick view
                </button>

                <span className="product-view">
                  View
                </span>
              </div>

              <div className="store-product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.color}</p>
                </div>

                <strong>₹{product.price}</strong>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ProductPage({ products, addToBag, bagCount, wishlist, toggleWishlist, onSearch, onWishlist, onBag, recentlyViewed, setRecentlyViewed }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [size, setSize] = useState(
    product?.sizes[0] || ""
  );

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!product) return;
    setRecentlyViewed((current) => [
      product.id,
      ...current.filter((item) => item !== product.id),
    ].slice(0, 4));
  }, [product?.id, setRecentlyViewed]);

  if (!product) {
    return (
      <div className="not-found">
        <h1>Product not found.</h1>

        <Link to="/shop" className="text-link">
          Back to shop <span>↗</span>
        </Link>
      </div>
    );
  }

  const viewedProducts = recentlyViewed
    .filter((item) => item !== product.id)
    .map((item) => products.find((entry) => entry.id === item))
    .filter(Boolean);

  const handleAdd = () => {
    addToBag({
      ...product,
      selectedSize: size,
      quantity,
    });

    navigate("/bag");
  };

  return (
    <div className="store-page">
      <Navbar
        bagCount={bagCount}
        wishlistCount={wishlist.length}
        onSearch={onSearch}
        onWishlist={onWishlist}
        onBag={onBag}
      />

      <main className="product-page">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <span className="eyebrow">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="detail-price-row">
              <p className="detail-price">
                ₹{product.price}
              </p>

              <button
                className={`detail-wishlist ${wishlist.includes(product.id) ? "active" : ""}`}
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist.includes(product.id) ? "♥ Saved" : "♡ Save"}
              </button>
            </div>

            <p className="detail-description">
              {product.description ||
                "A relaxed everyday piece designed with a clean silhouette and easy proportions."}
            </p>

            <div className="detail-line" />

            <div className="selection-section">
              <span className="selection-title">
                Size
              </span>

              <div className="size-options">
                {product.sizes.map((item) => (
                  <button
                    key={item}
                    className={
                      size === item ? "active" : ""
                    }
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="selection-section">
              <span className="selection-title">
                Quantity
              </span>

              <div className="quantity-control">
                <button
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="add-to-bag"
              onClick={handleAdd}
            >
              Add to bag
            </button>

            <div className="product-notes">
              <p>
                Free shipping on orders over ₹3,000
              </p>
              <p>Easy returns within 7 days</p>
            </div>
          </div>
        </div>

        {viewedProducts.length > 0 && (
          <section className="recently-viewed">
            <div className="recently-viewed-heading">
              <div>
                <span className="eyebrow">Continue browsing</span>
                <h2>Recently viewed</h2>
              </div>
              <Link to="/shop" className="text-link">Shop all <span>↗</span></Link>
            </div>

            <div className="recently-viewed-grid">
              {viewedProducts.map((item) => (
                <Link to={`/product/${item.id}`} className="recent-product" key={item.id}>
                  <div className="recent-product-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="recent-product-info">
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

function Bag({
  bag,
  wishlist,
  onSearch,
  onWishlist,
  onBag,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) {
  const bagCount = bag.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = bag.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="store-page">
      <Navbar
        bagCount={bagCount}
        wishlistCount={wishlist.length}
        onSearch={onSearch}
        onWishlist={onWishlist}
        onBag={onBag}
      />

      <main className="bag-page">
        <div className="bag-heading">
          <span className="eyebrow">
            Your selection
          </span>

          <h1>Bag</h1>
        </div>

        {bag.length === 0 ? (
          <div className="empty-bag">
            <p>Your bag is empty.</p>

            <Link to="/shop" className="text-link">
              Continue shopping <span>↗</span>
            </Link>
          </div>
        ) : (
          <div className="bag-layout">
            <div className="bag-items">
              {bag.map((item) => (
                <div
                  className="bag-item"
                  key={`${item.id}-${item.selectedSize}`}
                >
                  <div className="bag-item-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  <div className="bag-item-info">
                    <h3>{item.name}</h3>
                    <p>{item.color}</p>
                    <p>Size: {item.selectedSize}</p>
                    <p>₹{item.price}</p>

                    <div className="bag-item-controls">
                      <div className="quantity-control">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.cartItemId, item.quantity - 1)
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            onUpdateQuantity(item.cartItemId, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="remove-button"
                        onClick={() =>
                          onRemoveItem(item.cartItemId)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bag-summary">
              <h2>Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="summary-row summary-total">
                <span>Total</span>
                <span>₹{subtotal}</span>
              </div>

              <button
                className="checkout-button"
                onClick={onCheckout}
              >
                Checkout
              </button>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function BagDrawer({
  open,
  onClose,
  bag,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) {
  const subtotal = bag.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="bag-drawer-overlay" role="dialog" aria-modal="true">
      <button
        className="bag-drawer-backdrop"
        onClick={onClose}
        aria-label="Close bag"
      />

      <aside className="bag-drawer">
        <div className="bag-drawer-header">
          <div>
            <span className="eyebrow">Your selection</span>
            <h2>Bag</h2>
          </div>

          <button onClick={onClose}>Close ×</button>
        </div>

        {bag.length === 0 ? (
          <div className="bag-drawer-empty">
            <p>Your bag is empty.</p>

            <Link
              to="/shop"
              onClick={onClose}
              className="text-link"
            >
              Explore the wardrobe <span>↗</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="bag-drawer-items">
              {bag.map((item) => (
                <div
                  className="bag-drawer-item"
                  key={`${item.id}-${item.selectedSize}`}
                >
                  <div className="bag-drawer-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="bag-drawer-info">
                    <div>
                      <span>{item.category}</span>
                      <h3>{item.name}</h3>
                      <p>
                        {item.color} · {item.selectedSize}
                      </p>
                      <strong>₹{item.price}</strong>
                    </div>

                    <div className="bag-drawer-controls">
                      <div className="quantity-control">
                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.cartItemId,
                              item.quantity - 1
                            )
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            onUpdateQuantity(
                              item.cartItemId,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="remove-button"
                        onClick={() =>
                          onRemoveItem(item.cartItemId)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bag-drawer-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <p>Shipping calculated at checkout.</p>

              <Link
                to="/bag"
                onClick={onClose}
                className="bag-drawer-view"
              >
                View full bag <span>↗</span>
              </Link>

              <button
                className="checkout-button"
                onClick={onCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

function SearchOverlay({ open, onClose, products, openQuickView }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const normalized = query.trim().toLowerCase();
  const results = normalized
    ? products.filter((product) =>
        `${product.name} ${product.category} ${product.color}`
          .toLowerCase()
          .includes(normalized)
      )
    : products.slice(0, 6);

  return (
    <div className="search-overlay" role="dialog" aria-modal="true">
      <button className="search-backdrop" onClick={onClose} aria-label="Close search" />

      <div className="search-panel">
        <div className="search-topline">
          <span>Search ZOR</span>
          <button onClick={onClose}>Close ×</button>
        </div>

        <div className="search-input-wrap">
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pieces, categories, colours..."
          />
          <span>{results.length} results</span>
        </div>

        <div className="search-results">
          {results.length === 0 ? (
            <div className="search-empty">No pieces found.</div>
          ) : (
            results.map((product) => (
              <div className="search-result" key={product.id}>
                <Link to={`/product/${product.id}`} onClick={onClose} className="search-result-image">
                  <img src={product.image} alt={product.name} />
                </Link>

                <div className="search-result-info">
                  <span>{product.category}</span>
                  <Link to={`/product/${product.id}`} onClick={onClose}>
                    {product.name}
                  </Link>
                  <small>{product.color} · ₹{product.price}</small>
                </div>

                <button
                  className="search-quick-view"
                  onClick={() => {
                    onClose();
                    openQuickView(product);
                  }}
                >
                  Quick view ↗
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function QuickView({ product, onClose, addToBag, wishlist, toggleWishlist }) {
  const [size, setSize] = useState(product?.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setSize(product.sizes[0]);
      setQuantity(1);
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const handleAdd = () => {
    addToBag({ ...product, selectedSize: size, quantity });
    onClose();
  };

  return (
    <div className="quick-view-modal" role="dialog" aria-modal="true">
      <button className="quick-view-backdrop" onClick={onClose} aria-label="Close quick view" />

      <div className="quick-view-card">
        <button className="quick-view-close" onClick={onClose}>×</button>

        <div className="quick-view-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="quick-view-info">
          <span className="eyebrow">{product.category}</span>
          <h2>{product.name}</h2>
          <div className="quick-view-price-row">
            <span>₹{product.price}</span>
            <button
              className={`quick-view-save ${wishlist.includes(product.id) ? "active" : ""}`}
              onClick={() => toggleWishlist(product.id)}
            >
              {wishlist.includes(product.id) ? "♥ Saved" : "♡ Save"}
            </button>
          </div>

          <p className="quick-view-description">
            {product.description ||
              "A relaxed everyday piece designed with a clean silhouette and easy proportions."}
          </p>

          <div className="quick-view-section">
            <span>Size</span>
            <div className="size-options">
              {product.sizes.map((item) => (
                <button
                  key={item}
                  className={size === item ? "active" : ""}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="quick-view-section">
            <span>Quantity</span>
            <div className="quantity-control">
              <button onClick={() => setQuantity((current) => Math.max(1, current - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((current) => current + 1)}>+</button>
            </div>
          </div>

          <button className="add-to-bag" onClick={handleAdd}>
            Add to bag · ₹{product.price * quantity}
          </button>

          <Link to={`/product/${product.id}`} className="quick-view-full-link" onClick={onClose}>
            View full piece ↗
          </Link>
        </div>
      </div>
    </div>
  );
}

function WishlistOverlay({ open, onClose, wishlist, products, toggleWishlist }) {
  if (!open) return null;

  const savedProducts = products.filter((product) => wishlist.includes(product.id));

  return (
    <div className="wishlist-overlay" role="dialog" aria-modal="true">
      <button className="wishlist-backdrop" onClick={onClose} aria-label="Close wishlist" />

      <aside className="wishlist-panel">
        <div className="wishlist-header">
          <div>
            <span className="eyebrow">Saved pieces</span>
            <h2>Wishlist</h2>
          </div>
          <button onClick={onClose}>Close ×</button>
        </div>

        {savedProducts.length === 0 ? (
          <div className="wishlist-empty">
            <p>Nothing saved yet.</p>
            <Link to="/shop" onClick={onClose} className="text-link">
              Explore the wardrobe <span>↗</span>
            </Link>
          </div>
        ) : (
          <div className="wishlist-items">
            {savedProducts.map((product) => (
              <div className="wishlist-item" key={product.id}>
                <Link to={`/product/${product.id}`} onClick={onClose} className="wishlist-item-image">
                  <img src={product.image} alt={product.name} />
                </Link>

                <div className="wishlist-item-info">
                  <span>{product.category}</span>
                  <Link to={`/product/${product.id}`} onClick={onClose}>
                    {product.name}
                  </Link>
                  <small>{product.color} · ₹{product.price}</small>
                  <button onClick={() => toggleWishlist(product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>
    </div>
  );
}


function Checkout({ bag, wishlist, onSearch, onWishlist, onBag, onPlaceOrder, placingOrder }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const subtotal = bag.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPlaceOrder(form);
  };

  return (
    <div className="store-page">
      <Navbar
        bagCount={bag.reduce((total, item) => total + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onSearch={onSearch}
        onWishlist={onWishlist}
        onBag={onBag}
      />

      <main className="checkout-page">
        <div className="checkout-heading">
          <span className="eyebrow">Almost there</span>
          <h1>Checkout</h1>
        </div>

        <form className="checkout-layout" onSubmit={handleSubmit}>
          <section className="checkout-form">
            <div className="checkout-section-title">
              <span>01</span>
              <h2>Contact & delivery</h2>
            </div>

            <div className="checkout-fields">
              <input required placeholder="Full name" value={form.name} onChange={(e) => update("name", e.target.value)} />
              <input required type="email" placeholder="Email address" value={form.email} onChange={(e) => update("email", e.target.value)} />
              <input required type="tel" placeholder="Phone number" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
              <input required className="checkout-full" placeholder="Address" value={form.address} onChange={(e) => update("address", e.target.value)} />
              <input required placeholder="City" value={form.city} onChange={(e) => update("city", e.target.value)} />
              <input required inputMode="numeric" placeholder="PIN code" value={form.pincode} onChange={(e) => update("pincode", e.target.value)} />
            </div>

            <div className="checkout-note">
              <span>Payment</span>
              <p>For this portfolio build, payment is simulated. Your order will be placed as a pending order.</p>
            </div>
          </section>

          <aside className="checkout-summary">
            <div className="checkout-summary-top">
              <span>Order summary</span>
              <span>{bag.length} {bag.length === 1 ? "item" : "items"}</span>
            </div>

            <div className="checkout-items">
              {bag.map((item) => (
                <div className="checkout-item" key={`${item.id}-${item.selectedSize}`}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.selectedSize} · ×{item.quantity}</span>
                  </div>
                  <b>₹{item.price * item.quantity}</b>
                </div>
              ))}
            </div>

            <div className="checkout-total">
              <span>Total</span>
              <strong>₹{subtotal}</strong>
            </div>

            <button className="checkout-place-button" type="submit" disabled={placingOrder}>
              {placingOrder ? "Placing order..." : "Place order →"}
            </button>

            <Link to="/bag" className="checkout-back">← Back to bag</Link>
          </aside>
        </form>
      </main>

      <Footer />
    </div>
  );
}

function OrderSuccess() {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <div className="store-page">
      <Navbar
        bagCount={0}
        wishlistCount={0}
        onSearch={() => {}}
        onWishlist={() => {}}
        onBag={() => {}}
      />
      <main className="order-success">
        <span className="eyebrow">Order confirmed</span>
        <h1>Thank you.</h1>
        <p>Your ZOR order has been placed successfully.</p>
        {order && (
          <div className="order-success-card">
            <span>Order #{order.id}</span>
            <strong>₹{order.total}</strong>
            <small>Status: {order.status}</small>
          </div>
        )}
        <Link to="/shop" className="add-to-bag success-link">Continue shopping →</Link>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(fallbackProducts);
  const [bag, setBag] = useState([]);
  const [cartId, setCartId] = useState(() => {
    const savedCartId = localStorage.getItem("zor-cart-id");
    return savedCartId ? Number(savedCartId) : null;
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("zor-wishlist") || "[]");
    } catch {
      return [];
    }
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [bagOpen, setBagOpen] = useState(false);

  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("zor-recently-viewed") || "[]"
      );
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/products",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            `Product API returned ${response.status}`
          );
        }

        const data = await response.json();

        const fallbackById = Object.fromEntries(
          fallbackProducts.map((product) => [
            product.id,
            product,
          ])
        );

        const normalizedProducts = data.map((product) => ({
          ...product,
          sizes:
            fallbackById[product.id]?.sizes ||
            (product.category === "ACCESSORIES"
              ? ["ONE SIZE"]
              : ["S", "M", "L", "XL"]),
          image:
            fallbackById[product.id]?.image ||
            product.image,
        }));

        if (normalizedProducts.length > 0) {
          setProducts(normalizedProducts);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Could not load products from ZOR backend:",
            error
          );
        }
      }
    };

    loadProducts();

    return () => controller.abort();
  }, []);

  const mapCartToBag = (cart) => {
    if (!cart?.items) return [];

    return cart.items.map((item) => ({
      ...item.product,
      selectedSize: item.size,
      quantity: item.quantity,
      cartItemId: item.id,
    }));
  };

  const saveCart = (cart) => {
    setBag(mapCartToBag(cart));
  };

  useEffect(() => {
    let cancelled = false;

    const loadCart = async () => {
      try {
        let activeCartId = cartId;

        if (!activeCartId) {
          const createResponse = await fetch(CART_API, {
            method: "POST",
          });

          if (!createResponse.ok) {
            throw new Error(
              `Cart creation failed with ${createResponse.status}`
            );
          }

          const createdCart = await createResponse.json();
          activeCartId = createdCart.id;

          localStorage.setItem(
            "zor-cart-id",
            String(activeCartId)
          );

          if (!cancelled) {
            setCartId(activeCartId);
          }
        }

        const response = await fetch(
          `${CART_API}/${activeCartId}`
        );

        if (!response.ok) {
          throw new Error(
            `Cart API returned ${response.status}`
          );
        }

        const cart = await response.json();

        if (!cancelled) {
          saveCart(cart);
        }
      } catch (error) {
        if (!cancelled) {
          console.error(
            "Could not load ZOR cart:",
            error
          );
        }
      }
    };

    loadCart();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "zor-recently-viewed",
      JSON.stringify(recentlyViewed)
    );
  }, [recentlyViewed]);

  useEffect(() => {
    localStorage.setItem(
      "zor-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const bagCount = bag.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const addToBag = async (item) => {
    try {
      let activeCartId = cartId;

      if (!activeCartId) {
        const createResponse = await fetch(CART_API, {
          method: "POST",
        });

        if (!createResponse.ok) {
          throw new Error("Could not create cart");
        }

        const createdCart = await createResponse.json();
        activeCartId = createdCart.id;

        localStorage.setItem(
          "zor-cart-id",
          String(activeCartId)
        );

        setCartId(activeCartId);
      }

      const response = await fetch(
        `${CART_API}/${activeCartId}/items`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: item.id,
            size: item.selectedSize,
            quantity: item.quantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Add to cart failed with ${response.status}`
        );
      }

      const updatedCart = await response.json();
      saveCart(updatedCart);
    } catch (error) {
      console.error("Could not add item to ZOR cart:", error);
    }
  };

  const updateCartQuantity = async (
    cartItemId,
    quantity
  ) => {
    if (!cartId) return;

    try {
      const response = await fetch(
        `${CART_API}/${cartId}/items/${cartItemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Quantity update failed with ${response.status}`
        );
      }

      const updatedCart = await response.json();
      saveCart(updatedCart);
    } catch (error) {
      console.error(
        "Could not update ZOR cart quantity:",
        error
      );
    }
  };

  const removeCartItem = async (cartItemId) => {
    if (!cartId) return;

    try {
      const response = await fetch(
        `${CART_API}/${cartId}/items/${cartItemId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Remove failed with ${response.status}`
        );
      }

      const updatedCart = await response.json();
      saveCart(updatedCart);
    } catch (error) {
      console.error(
        "Could not remove item from ZOR cart:",
        error
      );
    }
  };

  const [placingOrder, setPlacingOrder] = useState(false);

  const placeOrder = async () => {
    if (!cartId || bag.length === 0 || placingOrder) return;

    setPlacingOrder(true);

    try {
      const response = await fetch(
        `http://localhost:8080/api/orders/from-cart/${cartId}`,
        { method: "POST" }
      );

      if (!response.ok) {
        throw new Error(`Order creation failed with ${response.status}`);
      }

      const order = await response.json();

      const clearResponse = await fetch(`${CART_API}/${cartId}`, {
        method: "DELETE",
      });

      if (clearResponse.ok) {
        const clearedCart = await clearResponse.json();
        saveCart(clearedCart);
      }

      setPlacingOrder(false);
      return order;
    } catch (error) {
      console.error("Could not place ZOR order:", error);
      setPlacingOrder(false);
      window.alert("Something went wrong while placing your order. Please try again.");
      return null;
    }
  };

  const handlePlaceOrder = async () => {
    const order = await placeOrder();
    if (order) {
      window.location.hash = "";
      navigate("/order-success", { state: { order } });
    }
  };

  const openWishlist = () => {
    setSearchOpen(false);
    setWishlistOpen(true);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              bagCount={bagCount}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              openQuickView={setQuickViewProduct}
              onSearch={() => setSearchOpen(true)}
              onWishlist={openWishlist}
              onBag={() => setBagOpen(true)}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              bagCount={bagCount}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              openQuickView={setQuickViewProduct}
              onSearch={() => setSearchOpen(true)}
              onWishlist={openWishlist}
              onBag={() => setBagOpen(true)}
            />
          }
        />

        <Route
          path="/shop/:category"
          element={
            <Shop
              products={products}
              bagCount={bagCount}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              openQuickView={setQuickViewProduct}
              onSearch={() => setSearchOpen(true)}
              onWishlist={openWishlist}
              onBag={() => setBagOpen(true)}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductPage
              products={products}
              addToBag={addToBag}
              bagCount={bagCount}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              onSearch={() => setSearchOpen(true)}
              onWishlist={openWishlist}
              onBag={() => setBagOpen(true)}
              recentlyViewed={recentlyViewed}
              setRecentlyViewed={setRecentlyViewed}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              bag={bag}
              wishlist={wishlist}
              onSearch={() => setSearchOpen(true)}
              onWishlist={openWishlist}
              onBag={() => setBagOpen(true)}
              onPlaceOrder={handlePlaceOrder}
              placingOrder={placingOrder}
            />
          }
        />

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        <Route
          path="/bag"
          element={
            <Bag
              bag={bag}
              wishlist={wishlist}
              onSearch={() => setSearchOpen(true)}
              onWishlist={openWishlist}
              onBag={() => setBagOpen(true)}
              onUpdateQuantity={updateCartQuantity}
              onRemoveItem={removeCartItem}
              onCheckout={() => navigate("/checkout")}
            />
          }
        />

        <Route
          path="*"
          element={
            <Home
              products={products}
              bagCount={bagCount}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              openQuickView={setQuickViewProduct}
              onSearch={() => setSearchOpen(true)}
              onWishlist={openWishlist}
              onBag={() => setBagOpen(true)}
            />
          }
        />
      </Routes>

      <BagDrawer
        open={bagOpen}
        onClose={() => setBagOpen(false)}
        bag={bag}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeCartItem}
        onCheckout={() => {
          setBagOpen(false);
          navigate("/checkout");
        }}
      />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={products}
        openQuickView={setQuickViewProduct}
      />

      <QuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        addToBag={addToBag}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />

      <WishlistOverlay
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlist={wishlist}
        products={products}
        toggleWishlist={toggleWishlist}
      />
    </>
  );
}

export default App;