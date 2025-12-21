import Navbar from "../components/Navbar/Navbar";
import VendorComplete from "../components/SignUpSection/VendorProceed";
import Footer from "../components/Footer/Footer";
import Referral from "../components/referral";
const SignUp = () => {

    return (
    <>
        <Referral/>
        <Navbar />
        <VendorComplete />
        <Footer />
    </>
    );
};
export default SignUp;