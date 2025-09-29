import { Link } from "react-router-dom";
import "./CartLoyalty.css";

const CartLoyalty = () => {
  return (
    <section className="cartloyalty">
      <div className="cartloyalty-title">
        <div className="cartloyalty-title-text">
          <h3>Your Cart</h3>
          <p>
            You’re almost there! Review your items below and head to checkout to
            make someone’s day a little.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartLoyalty;
