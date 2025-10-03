import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartSec.css";

const TrashSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
      stroke="#646565"
      strokeOpacity="0.8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
      stroke="#646565"
      strokeOpacity="0.8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M9.5 16.5V10.5"
      stroke="#646565"
      strokeOpacity="0.8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14.5 16.5V10.5"
      stroke="#646565"
      strokeOpacity="0.8"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const HeartBoxSVG = () => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_di_1696_2926)">
      <rect
        x="18.4062"
        width="39.6257"
        height="39.6257"
        rx="5.12748"
        transform="rotate(18.241 18.4062 0)"
        fill="white"
      />
      <g filter="url(#filter1_d_1696_2926)">
        <g clip-path="url(#clip0_1696_2926)">
          <g filter="url(#filter2_iii_1696_2926)">
            <path
              d="M23.7885 13.6536C20.526 15.2987 19.2148 19.2771 20.8599 22.5396L23.6383 28.0163C25.4365 31.5609 26.3356 33.3333 27.9956 33.8781C29.6556 34.423 31.4301 33.5282 34.9791 31.7386L40.4305 28.9898C43.693 27.3448 45.0041 23.3664 43.3591 20.1039C41.714 16.8414 37.7356 15.5303 34.4731 17.1753L33.2775 17.7782L32.6744 16.5822C31.0293 13.3198 27.051 12.0086 23.7885 13.6536Z"
              fill="#FC7950"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_di_1696_2926"
        x="-0.600379"
        y="-2.30382"
        width="63.2437"
        height="65.5502"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6.60429" />
        <feGaussianBlur stdDeviation="3.30214" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1696_2926"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1696_2926"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-2.30382" />
        <feGaussianBlur stdDeviation="2.30382" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1696_2926"
        />
      </filter>
      <filter
        id="filter1_d_1696_2926"
        x="3.56759"
        y="4.16992"
        width="54.9078"
        height="54.9068"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="6.60429" />
        <feGaussianBlur stdDeviation="3.30214" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.921569 0 0 0 0 0.619765 0 0 0 0 0.341177 0 0 0 0.48 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1696_2926"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1696_2926"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_iii_1696_2926"
        x="20.1484"
        y="7.99051"
        width="23.9219"
        height="27.8892"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-4.95321" />
        <feGaussianBlur stdDeviation="2.47661" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1696_2926"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-1.65107" />
        <feGaussianBlur stdDeviation="0.825536" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.845333 0 0 0 0 0.733333 0 0 0 0.42 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1696_2926"
          result="effect2_innerShadow_1696_2926"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.84306" />
        <feGaussianBlur stdDeviation="1.84306" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.908333 0 0 0 0 0.573764 0 0 0 0 0.264931 0 0 0 0.76 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_1696_2926"
          result="effect3_innerShadow_1696_2926"
        />
      </filter>
      <clipPath id="clip0_1696_2926">
        <rect
          x="20.5078"
          y="4.16992"
          width="33.0214"
          height="33.0214"
          rx="3.30214"
          transform="rotate(18.241 20.5078 4.16992)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

/* Quantity control */
function QuantityControl({ value, onChange }) {
  return (
    <div className="qty-control">
      <button
        className="qty-btn"
        onClick={() => onChange(Math.max(0, value - 1))}
      >
        −
      </button>
      <div className="qty-val">{value}</div>
      <button className="qty-btn" onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
}

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Chocolate",
      size: "Big",
      price: 15000,
      qty: 2,
      image: "/images/1.png",
    },
    {
      id: 2,
      name: "Rose flower",
      size: "Small",
      price: 25000,
      qty: 2,
      image: "/images/2.png",
    },
    {
      id: 3,
      name: "Cup cake",
      size: "Small",
      price: 5000,
      qty: 4,
      image: "/images/3.png",
    },
    {
      id: 4,
      name: "Perfume",
      size: "Medium",
      price: 35000,
      qty: 1,
      image: "/images/4.png",
    },
    {
      id: 5,
      name: "Wristwatch",
      size: "Big",
      price: 95000,
      qty: 1,
      image: "/images/5.png",
    },
  ]);

  const updateQty = (id, nextQty) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: nextQty } : i))
    );
  };

  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const sumTotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = 5000;
  const grand = sumTotal + shipping;

  const format = (n) => `₦${n.toLocaleString()}`;

  return (
    <div className="cart-page">
      {/* left side list */}
      <div className="cart-inner">
        <div className="cart-left">
          <div className="cart-header">
            <div className="col product-col">Product</div>
            <div className="col price-col">Price</div>
            <div className="col qty-col">Quantity</div>
            <div className="col total-col">Total</div>
            <div className="col empty-col"></div>
          </div>

          <div className="cart-list">
            {items.map((item) => (
              <div key={item.id} className="cart-row">
                <div className="product-info">
                  <div className="img-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="prod-text">
                    <div className="prod-title">{item.name}</div>
                    <div className="prod-sub">{item.size}</div>
                  </div>
                </div>
                <div className="price">{format(item.price)}</div>
                <div className="qty-wrap">
                  <QuantityControl
                    value={item.qty}
                    onChange={(q) => updateQty(item.id, q)}
                  />
                </div>
                <div className="row-total">{format(item.price * item.qty)}</div>
                <button
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <TrashSVG />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* right side summary */}
        <aside className="cart-right">
          <div className="summary-box">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <div>Sum total</div>
              <div className="sum-val">{format(sumTotal)}</div>
            </div>
            <div className="summary-row">
              <div>Shipping fee</div>
              <div className="sum-val">{format(shipping)}</div>
            </div>
            <div className="summary-divider" />
            <div className="summary-total">
              <div>TOTAL</div>
              <div className="sum-val big">{format(grand)}</div>
            </div>
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </aside>
      </div>

      {/* floating heart */}
      <div className="heart-floating">
        <HeartBoxSVG />
      </div>
    </div>
  );
}
