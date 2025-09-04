import Navbar from "../components/Navbar/Navbar";
import Loyalty from "../components/LoyaltySection/Loyalty";
import OurPricing from "../components/OurPricingSection/OurPricing";
import Footer from "../components/Footer/Footer";

const Pricing = () => {

    return (
    <>
        <Navbar />
        <div style={{height: "60px" }}></div>
        <Loyalty />
        <OurPricing />
        <Footer />
    </>
    );
};
export default Pricing;