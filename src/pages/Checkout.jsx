import Navbar from "../components/Navbar/Navbar";
import CheckoutSec from "../components/CheckoutSection/CheckoutSec";
import Footer from "../components/Footer/Footer";
import Referral from "../components/referral";
const Checkout = () => {
  return (
    <>
        <Referral/>
      <Navbar />
      <CheckoutSec />
      <Footer />
    </>
  );
};

export default Checkout;
