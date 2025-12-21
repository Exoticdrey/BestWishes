import Navbar from "../components/Navbar/Navbar";
import SpinHead from "../components/SpinHeadSection/SpinHead";
import Loyalty from "../components/LoyaltySection/Loyalty";
import SpinWin from "../components/SpinWinSection/SpinWin";
import Footer from "../components/Footer/Footer";
import Referral from "../components/referral";
const Pricing = () => {

    return (
    <>
        <Referral/>
        <Navbar />
        <div style={{ height: "50px" }}></div>
        <SpinHead />
        {/* <Loyalty /> */}
        <SpinWin />
        <Footer />
    </>
    );
};
export default Pricing;