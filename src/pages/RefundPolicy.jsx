import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./RefundPolicy.css";


function Refund () {
    return (
        <>
            <Navbar />

            <div className="refund">

                <div className="refund-head">

                    <h3>Refund Policy</h3>
                    <p>We value your happiness and want you to have the best gifting <br />experience. Please review our refund guidelines below.</p>

                </div>

                <div className="refunds-info">
                        
                        <div className="refund-column1">

                            <div className="refund-info">
                                <h5><span>|</span>  Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="refund-info">
                                <h5><span>|</span>  Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="refund-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>
                            
                        </div>
                        

                        <div className="refund-column2">

                            <div className="refund-info">
                                <h5><span>|</span>  Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="refund-info">
                                <h5><span>|</span>  Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="refund-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            {/* <div className="privacy-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div> */}
                            
                        </div>


                        <div className="refund-column3">

                            <div className="refund-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="refund-info">
                                <h5><span>|</span> Acceptance of Terms</h5>
                                <p>By accessing our website, you can confirm that you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use the platform.</p>
                            </div>

                            <div className="refund-info">
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

export default Refund;