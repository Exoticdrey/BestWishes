import './OurPricing.css';
import { FaCheck } from "react-icons/fa";

const OurPricing = () => {
    return (
        <section className="pricing">

            <div className="pricing-container">

                <div className="pricing-head">
                        <h3>Our Pricing</h3>
                        <p>Enjoy thoughtful gifting with our free plan, or unlock premium <br />features for deeper personalization and exclusive tools.</p>

                </div>

                <div className="price-container">

                    <div className="free-trial">

                        <div className="free-trial-top">
                            <div className="free-text">
                                <h4>Free Trial</h4>
                                <p>Get started without commitment</p>
                            </div>
                            <div className="free-week">
                                <p>1 Day Free</p>
                            </div>
                        </div>
                        <div className="free-trial-bottom">
                            <h3>Free <span>One Virtual card per week <p>Full access to these features</p></span></h3>

                            <ul className="features-list">
                                <li> <FaCheck className="tick-icon" /> Effects</li>
                                <li> <FaCheck className="tick-icon" /> Fonts</li>
                                <li> <FaCheck className="tick-icon" /> Colors</li>
                                <li> <FaCheck className="tick-icon" /> Image</li>
                            </ul>

                            <a href="#" className='start-button'>Start Free Trial</a>
                        </div>
                    </div>

                    <div className="premium">

                        <div className="premium-top">
                            <div className="Premium-text">
                                <h4>Premium Access</h4>
                                <p>After your trial period ends</p>
                            </div>
                            <div className="premium-week">
                                <p>After 1 Week</p>
                            </div>
                        </div>
                        <div className="premium-bottom">
                            <h3>#800 <span>Per Virtual Card <p>All features</p></span></h3>

                            <ul className="features-list">
                                <div className="row1">
<li> <FaCheck className="tick-icon" /> Effects</li>
                                <li> <FaCheck className="tick-icon" /> Fonts</li>
                                <li> <FaCheck className="tick-icon" /> Music</li>
                                <li> <FaCheck className="tick-icon" /> Image</li>
                                </div>
                                
                                <div className='row2'>

      <li> <FaCheck className="tick-icon" /> Colors</li>
                                <li> <FaCheck className="tick-icon" /> Recording</li>
                                <li> <FaCheck className="tick-icon" /> Stickers</li>                          </div>
                                
                            </ul>

                            <div className="currency">
                                <p>Currency Equivalent</p>

                                <div className="eqv">

                                    <div className="usd">
                                        <p>USD</p>
                                        <p>$0.40</p>
                                    </div> <hr />

                                    <div className="zar">
                                        <p>ZAR</p>
                                        <p>R7.20</p>
                                    </div> <hr />

                                    <div className="try">
                                        <p>TRY</p>
                                        <p>T12.80</p>
                                    </div> <hr />

                                    <div className="lira">
                                        <p>LIRA</p>
                                        <p>£12.50</p>
                                    </div> <hr />
                                </div>
                            </div>

                            <a href="#" className='go-button'>Go Premium Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OurPricing;