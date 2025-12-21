import Navbar from "../components/Navbar/Navbar";
import CartLoyalty from "../components/CartLoyaltySection/CartLoyalty";
import CartSec from "../components/CartSection/CartSec";
import Footer from "../components/Footer/Footer";
import Referral from "../components/referral";
const Cart = () => {
  return (
    <>
        <Referral/>
      <Navbar />
      <div style={{ height: "60px" }}></div>
      <CartLoyalty />
        <div className="soon"><h2>Coming soon...</h2></div>
      {/* <CartSec /> */}
      <Footer />
    </>
  );
};

export default Cart;
