import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials-head">
                <p className="testimonials-title">
                    What do <u>Gifters</u> say about us?
                </p>
                <p className="testimonials-subtitle">
                    Explore a <span className="blue-highlight">variety</span> of gifts to make whether <br /><span className="blue-highlight">Birthday</span> , anniversaries and milestones to <br />make you special.
                </p>

                <div className="testimonials-cards">
                    <div className="testimonials-cards-row1">
                        <div className="testimonials-cards-row1-image1">
                            <img src="/test1.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row1-image2">
                            <img src="/test2.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row1-image3">
                            <img src="/test3.png" alt="" />
                        </div>

                    </div>

                    <div className="testimonials-cards-row2">
                        <div className="testimonials-cards-row2-image1">
                            <img src="/test4.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row2-image2">
                            <img src="/test5.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row2-image3">
                            <img src="/test6.png" alt="" />
                        </div>

                        <div className="testimonials-cards-row2-image4">
                            <img src="/test7.png" alt="" />
                        </div>

                    </div>

                    <div className="testimonials-cards-row3">
                        <div className="testimonials-cards-row3-image1">
                            <img src="/test8.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row3-image2">
                            <img src="/test9.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row3-image3">
                            <img src="/test10.png" alt="" />
                        </div>

                        <div className="testimonials-cards-row3-image4">
                            <img src="/test1.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
      </section>
    );
};

export default Testimonials;