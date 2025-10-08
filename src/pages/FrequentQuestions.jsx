import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./FrequentQuestions.css";
import { Link } from "react-router-dom";

function Faq () {
    return (
        <>
            <Navbar />
            <div className="faq">

                <div className="faq-head">
                    <h3>Frequently Asked Questions</h3>
                    <p>Find quick answers to questions about gifts, cards, delivery and <br /> many more.</p>

                </div>

                <div className="faq-container">

                    <div className="faq-row1">
                        <div className="faq-info">
                            <h4>How Do I Create And Send A Best Wishes Card?</h4>
                            <p>Simply choose a card template,personalize your message, select a gift if you want and send, or we take care of the delivery to your loved one!</p>
                        </div>

                        <div className="faq-info">
                            <h4>How Do I Create And Send A Best Wishes Card?</h4>
                            <p>Simply choose a card template,personalize your message, select a gift if you want and send, or we take care of the delivery to your loved one!</p>
                        </div>

                        <div className="faq-info">
                            <h4>How Do I Create And Send A Best Wishes Card?</h4>
                            <p>Simply choose a card template,personalize your message, select a gift if you want and send, or we take care of the delivery to your loved one!</p>
                        </div>
                    </div>

                    <div className="faq-row2">
                        <div className="faq-info">
                            <h4>How Do I Create And Send A Best Wishes Card?</h4>
                            <p>Simply choose a card template,personalize your message, select a gift if you want and send, or we take care of the delivery to your loved one!</p>
                        </div>

                        <div className="faq-info">
                            <h4>How Do I Create And Send A Best Wishes Card?</h4>
                            <p>Simply choose a card template,personalize your message, select a gift if you want and send, or we take care of the delivery to your loved one!</p>
                        </div>

                        <div className="faq-info">
                            <h4>How Do I Create And Send A Best Wishes Card?</h4>
                            <p>Simply choose a card template,personalize your message, select a gift if you want and send, or we take care of the delivery to your loved one!</p>
                        </div>
                    </div>

                </div>

                <div className="help">

                    <div className="support">

                        <img src="/contacticon.png" alt="" />
                        <p>Still have questions? We;re here to <br />help.</p>

                        <Link to="#" className="contact">Contact Support</Link>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
export default Faq;