import { useMemo } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaGift, FaStar } from "react-icons/fa";
import "./LoyaltyCard.css";

function LoyaltyCard() {
  // Demo values; in a real app fetch from API
  const totalNeeded = 5;
  const pointsEarned = 5; // change to preview different states

  const pointsLeft = Math.max(0, totalNeeded - pointsEarned);
  const pct = useMemo(
    () => Math.min(100, Math.round((pointsEarned / totalNeeded) * 100)),
    [pointsEarned, totalNeeded]
  );

  return (
    <>
      <Navbar />

      <section className="loyalty-hero">
        <h2>Loyalty Card</h2>
        <p>
          You're almost there! Review your items below and head to checkout
          to make someone's day a little.
        </p>
      </section>

      <section className="loyalty-container">
        <div className="loyalty-panel">
          <p className="panel-caption">Shop 5 Times to Get Our Loyalty Card</p>
          <div className="rate-pill">1 order = 1 point</div>

          <div className="balance-row">
            <span className="balance-title">Point balance</span>
            <div className="sparkles">
              <FaStar />
            </div>
          </div>

          <div className="point-dots">
            {Array.from({ length: totalNeeded }).map((_, i) => (
              <span key={i} className={`dot ${i < pointsEarned ? "full" : ""}`} />
            ))}
            <div className="free-gift">
              <FaGift />
              <span>Free Gift</span>
            </div>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-head">
            <div className="ph-left">
              <img src="/giftbox.png" alt="gift" />
              <span>Convert points to get our loyalty card</span>
            </div>
            <div className="ph-right">{pointsLeft} points left</div>
          </div>
          <div className="progress-bar">
            <div className="progress-inner" style={{ width: pct + "%" }} />
          </div>
          <div className="progress-foot">
            {pointsEarned} points out of {totalNeeded} points earned
          </div>
        </div>

        <div className="cta-row">
          <button className="get-card-btn" disabled={pointsEarned < totalNeeded}>
            Get Card
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LoyaltyCard;

