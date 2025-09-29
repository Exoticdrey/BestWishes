import Navbar from "../components/Navbar/Navbar";
import CartLoyalty from "../components/CartLoyaltySection/CartLoyalty";
import CartSec from "../components/CartSection/CartSec";
import Footer from "../components/Footer/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div style={{ height: "60px" }}></div>
      <CartLoyalty />
      <CartSec />
      <Footer />
    </>
  );
};

export default Cart;
