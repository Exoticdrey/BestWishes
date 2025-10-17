import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaCheckCircle, FaTimesCircle, FaLock, FaExclamationCircle, FaArrowRight } from "react-icons/fa";
import "./TrackItem.css";

function TrackItem() {
  const [orderId, setOrderId] = useState("0001333");
  const [tracked, setTracked] = useState(false);

  // Demo data – in a real app this would come from an API
  const status = {
    orderStarted: true,
    receivedAtBw: true,
    vendorReceived: true,
    vendorProcessed: false,
    dispatched: false,
  };

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);
  const formattedDate = estimatedDelivery.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const deliveryCode = "938201"; // placeholder

  return (
    <>
      <Navbar />

      <section className="track-hero">
        <h2>Track Item</h2>
        <p>View and track all your orders in one place</p>
      </section>

      <section className="track-container">
        <h3 className="section-title">Enter your Order ID:</h3>
        <div className="track-input-row">
          <input
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="0001333"
            className="order-input"
          />
          <button className="track-btn" onClick={() => setTracked(true)}>
            Track item
          </button>
        </div>

        {tracked && (
          <div className="results">
            <h4 className="status-title">Order status</h4>

            <ul className="status-list">
              <li>
                <span>Order Started</span>
                {status.orderStarted ? (
                  <FaCheckCircle className="ok" />
                ) : (
                  <FaTimesCircle className="bad" />
                )}
              </li>
              <li>
                <span>Received at BestWishes.ng</span>
                {status.receivedAtBw ? (
                  <FaCheckCircle className="ok" />
                ) : (
                  <FaTimesCircle className="bad" />
                )}
              </li>
              <li>
                <span>Vendor Received Order</span>
                {status.vendorReceived ? (
                  <FaCheckCircle className="ok" />
                ) : (
                  <FaTimesCircle className="bad" />
                )}
              </li>
              <li>
                <span>Vendor Processed Order</span>
                {status.vendorProcessed ? (
                  <FaCheckCircle className="ok" />
                ) : (
                  <FaTimesCircle className="bad" />
                )}
              </li>
              <li>
                <span>Dispatched</span>
                {status.dispatched ? (
                  <FaCheckCircle className="ok" />
                ) : (
                  <FaTimesCircle className="bad" />
                )}
              </li>
            </ul>

            <div className="est">
              <p>
                <strong>Estimated Delivery</strong> {formattedDate}
              </p>
            </div>

            <div className="code-card">
              <div className="code-title">
                <FaLock />
                <span>Delivery Code</span>
              </div>
              <div className="code-value">{deliveryCode}</div>
              <p className="code-note">
                Keep this safe. Share it only when you've received your item.
              </p>
            </div>

            <div className="foot-row">
              <div className="left-hints">
                <div className="hint">
                  <FaExclamationCircle /> <span>Multiple Orders?</span>
                </div>
                <div className="hint sub">
                  <FaExclamationCircle />
                  <span>You have other items in transit</span>
                </div>
              </div>

              <a className="view-orders" href="/track-items">
                View All My Orders <FaArrowRight />
              </a>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default TrackItem;
