import Navbar from "../components/Navbar/Navbar";
import Loyalty from "../components/LoyaltySection/Loyalty";
import OurPricing from "../components/OurPricingSection/OurPricing";
import Footer from "../components/Footer/Footer";
import Referral from "../components/referral";
const Pricing = () => {

    return (
    <>
        <Referral/>
        <Navbar />
        <div style={{height: "100px" }}></div>
        <Loyalty />
        <OurPricing />
        <Footer />
    </>
    );
};
export default Pricing;