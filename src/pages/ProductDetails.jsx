import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./ProductDetails.css";

const demoProduct = {
  slug: "strawberry-cake",
  title: "Strawberry Cake",
  category: "Cakes & Pastries",
  vendor: "Monarch Cakes",
  price: 55000, // kobo-like? here Naira without decimals
  oldPrice: 60000,
  rating: 4.9,
  reviewsCount: 163,
  sizes: ["Small", "Medium", "Large"],
  description:
    "This is a strawberry cake made from strawberry, this is a strawberry cake made from strawberry; this is a strawberry cake.",
  images: [
    "/cake1.png",
    "/cake2.png",
    "/templates/template11.png",
    "/templates/template12.png",
    "/templates/template13.png",
  ],
};

const nf = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

function Stars({ value }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const diff = value - i + 1;
    if (diff >= 1) stars.push(<FaStar key={i} className="star full" />);
    else if (diff > 0) stars.push(<FaStarHalfAlt key={i} className="star half" />);
    else stars.push(<FaRegStar key={i} className="star" />);
  }
  return <div className="stars">{stars}</div>;
}

export default function ProductDetails() {
  const { slug } = useParams();
  const product = demoProduct; // In future, fetch by slug

  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(product.sizes[1]);
  const [qty, setQty] = useState(1);

  const discountPct = useMemo(() => {
    if (!product.oldPrice) return 0;
    return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  }, [product.price, product.oldPrice]);

  return (
    <>
      <Navbar />

      <section className="pd-hero">
        <h2>Product Details</h2>
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span>›</span>
          <Link to="/marketplace">Marketplace</Link>
          <span>›</span>
          <span className="current">Product details</span>
        </div>
      </section>

      <section className="pd-wrap">
        <div className="pd-grid">
          <div className="pd-gallery">
            <div className="pd-mainimg">
              <img src={product.images[activeImg]} alt={product.title} />
            </div>
            <div className="pd-thumbs">
              {product.images.map((src, i) => (
                <button
                  key={src + i}
                  className={`thumb ${i === activeImg ? "active" : ""}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="thumb" />
                </button>
              ))}
            </div>
          </div>

          <div className="pd-info">
            <div className="pd-cat">{product.category}</div>
            <h3 className="pd-title">{product.title} <span className="badge">In Stock</span></h3>

            <div className="pd-price">
              <span className="new">{nf.format(product.price)}</span>
              {product.oldPrice && (
                <>
                  <span className="old">{nf.format(product.oldPrice)}</span>
                  <span className="off">-{discountPct}%</span>
                </>
              )}
            </div>

            <div className="pd-rating">
              <Stars value={product.rating} />
              <span className="rating-num">{product.rating}</span>
              <span className="reviews">({product.reviewsCount} Reviews)</span>
            </div>

            <p className="pd-desc">{product.description}</p>

            <div className="pd-size">
              <span>Size:</span>
              <div className="size-list">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    className={`size ${s === size ? "active" : ""}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="pd-qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
              <input value={qty} readOnly />
              <button onClick={() => setQty((q) => q + 1)}>+</button>
              <button className="btn-outline">Add to Cart</button>
              <button className="btn-primary">Buy Now</button>
            </div>

            <div className="pd-meta">
              <div>
                <span>VENDOR</span> : {product.vendor}
              </div>
              <div>
                <span>CATEGORY</span> : {product.category.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        <div className="pd-tabs">
          <button className="tab">Description</button>
          <button className="tab">Additional Information</button>
          <button className="tab active">Review</button>
        </div>

        <div className="pd-reviews">
          <div className="score">
            <div className="big">4.9</div>
            <Stars value={4.9} />
            <div className="small">(163 Reviews)</div>
          </div>

          <div className="breakdown">
            {[5, 4, 3, 2, 1].map((star, i) => (
              <div key={i} className="row">
                <span className="label">{star} star</span>
                <div className="bar"><span style={{ width: `${(6 - star) * 10 + 60}%` }} /></div>
              </div>
            ))}
          </div>
        </div>

        <div className="pd-review-list">
          {[{ name: "Jenny Ije", loc: "Lagos, Nigeria" }, { name: "Mary Jane", loc: "Texas, USA" }].map((r, idx) => (
            <div className="rev" key={idx}>
              <img src="/auth-image.png" alt="avatar" />
              <div className="rev-body">
                <div className="rev-head">
                  <strong>{r.name}</strong>
                  <span className="loc">{r.loc}</span>
                </div>
                <div className="rev-title">Love it, I love the strawberry cake so much!</div>
                <div className="rev-text">
                  I recently purchased the strawberry cake from best wishes and it was the best cake I ever purchased. I love the taste and the fantastic smell of the cake, one of the best purchases ever I made on cakes.
                </div>
                <div className="rev-stars"><Stars value={4.9} /></div>
              </div>
            </div>
          ))}
          <div className="rev-foot">Showing 2 of 2 results</div>
        </div>

        <div className="pd-write">
          <textarea placeholder="Write a review..." />
        </div>

        <div className="pd-submit">
          <button className="btn-primary large">Submit Review</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

