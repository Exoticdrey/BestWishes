import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./TrackItemList.css";

const orders = [
  {
    id: 1,
    title: "Spicy Korean Ramen Box",
    orderId: "BWK-10483",
    orderDate: "July 29, 2025",
    vendor: "The Ramen Shelf",
    estDelivery: "August 2, 2025",
    amount: 5200,
    status: "Delivered",
  },
  {
    id: 2,
    title: "Spicy Korean Ramen Box",
    orderId: "BWK-10484",
    orderDate: "July 29, 2025",
    vendor: "The Ramen Shelf",
    estDelivery: "August 2, 2025",
    amount: 5200,
    status: "Delivered",
  },
  {
    id: 3,
    title: "Spicy Korean Ramen Box",
    orderId: "BWK-10485",
    orderDate: "July 29, 2025",
    vendor: "The Ramen Shelf",
    estDelivery: "August 2, 2025",
    amount: 5200,
    status: "Delivered",
  },
];

const nf = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" });

function TrackItemList() {
  const total = orders.reduce((sum, o) => sum + o.amount, 0);

  return (
    <>
      <Navbar />

      <section className="track-hero">
        <h2>Track Item</h2>
        <p>View and track all your orders in one place</p>
      </section>

      <section className="list-container">
        <div className="list-head">
          <Link to="/track-item" className="back-btn-lite">
            <FaArrowLeft /> Back To Order Tracker
          </Link>
        </div>

        <div className="orders">
          {orders.map((o) => (
            <div className="order-row" key={o.id}>
              <div className="order-left">
                <h4 className="order-title">{o.title}</h4>
                <div className="order-meta">
                  <div>
                    <div>Order ID: {o.orderId}</div>
                    <div>Order Date: {o.orderDate}</div>
                  </div>
                  <div>
                    <div>Vendor: {o.vendor}</div>
                    <div>Est. Delivery: {o.estDelivery}</div>
                  </div>
                  <div className="order-amount">Amount: {nf.format(o.amount)}</div>
                </div>
                <button className="track-order-btn">Track Order</button>
              </div>
              <div className="order-preview" aria-hidden="true" />
              <div>
                <span className="status-badge delivered">{o.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="list-foot">
          Showing {orders.length} Orders . Total Value {nf.format(total)}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TrackItemList;

