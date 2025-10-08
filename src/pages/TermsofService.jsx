import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./TermsofService.css";

function Terms() {
    return(
        <>
            <Navbar />
                <div className="terms">

                    <div className="terms-head">
                        <h3>Terms of Service</h3>
                        <p>By using the Best Wishes platform, you agree to the following terms. <br />Please read them carefully.</p>
                    </div>

                    <div className="terms-info">
                        
                        <div className="terms-column1">

                            <div className="term-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="term-info">
                                <h5><span>|</span> Updates of These Terms</h5>
                                <p>we reserve the right to modify or update these Terms of Service at any time. Any changes will be posted on this page with date of revision.</p>
                            </div>

                            <div className="term-info">
                                <h5><span>|</span> Limitation of Liability</h5>
                                <p>Best Wishes is not liable for any indirect, incidental, or consequential damages resulting from your use of the service or inability to use it.</p>
                            </div>
                            
                        </div>
                        

                        <div className="terms-column2">

                            <div className="term-info">
                                <h5><span>|</span> Prohibited Use</h5>
                                <p>You agree not to misuse the platform, submit false information, or use the service for any unlawful purposes, including sending offensive or harmful contents.</p>
                            </div>

                            <div className="term-info">
                                <h5><span>|</span> Account Responsibility</h5>
                                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                            </div>

                            <div className="term-info">
                                <h5><span>|</span> Orders and Delivery</h5>
                                <p>All purchases are subjected to product availability and delivery conditions. You are responsible for providing accurate delivery details at checkout.</p>
                            </div>

                            <div className="term-info">
                                <h5><span>|</span> Contact</h5>
                                <p>If you have any questions about these Terms, please contact us at  <b>support@bestwishes.com</b></p>
                            </div>
                            
                        </div>


                        <div className="terms-column3">

                            <div className="term-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="term-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="term-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>
                            
                        </div>

                    </div>
                </div>
            <Footer />
        </>
    );
}
export default Terms;