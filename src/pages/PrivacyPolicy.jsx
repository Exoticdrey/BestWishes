import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./PrivacyPolicy.css";
import { FaInfoCircle, FaCog, FaLock, FaShareAlt, FaCookieBite, FaUser, FaStickyNote, FaHeadphones, FaEnvelope } from "react-icons/fa";

function Privacy () {
    return (
        <>
            <Navbar />

            <div className="privacy">

                <div className="privacy-head">

                    <h3>Privacy Policy</h3>
                    <p>We are committed to protecting your personal information and <br />respecting your privacy when using Best Wishes.</p>

                </div>

                <div className="privacies-info">
                        
                        <div className="privacy-column1">

                            <div className="privacy-info">
                                <h5><span>|</span> < FaInfoCircle className=" info-icon"/> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="privacy-info">
                                <h5><span>|</span> < FaShareAlt className=" share-icon"/> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="privacy-info">
                                <h5><span>|</span> <FaStickyNote className=" note-icon"/> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>
                            
                        </div>
                        

                        <div className="privacy-column2">

                            <div className="privacy-info">
                                <h5><span>|</span> <FaCog className=" gear-icon"/> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="privacy-info">
                                <h5><span>|</span> <FaCookieBite className=" cookie-icon"/> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="privacy-info">
                                <h5><span>|</span> <FaHeadphones className=" headphone-icon"/> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            {/* <div className="privacy-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div> */}
                            
                        </div>


                        <div className="privacy-column3">

                            <div className="privacy-info">
                                <h5><span>|</span> <FaLock className=" lock-icon"/> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="privacy-info">
                                <h5><span>|</span> <FaUser className=" user-icon"/> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="privacy-info">
                                <h5><span>|</span> <FaEnvelope className=" mail-icon"/> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>
                            
                        </div>

                    </div>

            </div>

            <Footer />
        </>
    );
}

export default Privacy;