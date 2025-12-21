import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials-head">
                <h3 className="testimonials-title">
                   Testimonials
                </h3>
                <p className="testimonials-subtitle">
                    Explore a variety of gifts to make  whether birthdays, anniversaries and <br /> milestones extra special.
                </p>

                <div className="testimonials-cards">
                    <div className="testimonials-cards-row1">
                        <div className="testimonials-cards-row1-image1">
                            <img src="/testim1.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row1-image2">
                            <img src="/testim2.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row1-image3">
                            <img src="/testim3.png" alt="" />
                        </div>

                    </div>

                    {/* <div className="testimonials-cards-row2">
                        <div className="testimonials-cards-row2-image1">
                            <img src="/testimonial1.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row2-image2">
                            <img src="/testimonial2.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row2-image3">
                            <img src="/testimonial3.png" alt="" />
                        </div>

                        <div className="testimonials-cards-row2-image4">
                            <img src="/testimonial1.png" alt="" />
                        </div>

                    </div> */}

                    {/* <div className="testimonials-cards-row3">
                        <div className="testimonials-cards-row3-image1">
                            <img src="/testimonial2.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row3-image2">
                            <img src="/testimonial3.png" alt="" />
                        </div>
                        <div className="testimonials-cards-row3-image3">
                            <img src="/testimonial1.png" alt="" />
                        </div>

                        <div className="testimonials-cards-row3-image4">
                            <img src="/testimonial2.png" alt="" />
                        </div>

                    </div> */}
                </div>
            </div>
      </section>
    );
};

export default Testimonials;