
import './AboutUs.css';

const About = () => {
    return (

        <section className="about-us">
            <div className="about-container">

                <div className="about-writeup">
                    <h3><span>About</span> Us</h3>

                    <p>Best Wishes is built to help you celebrate life’s special moments. From cards to thoughtful gifts. we make sending love easy, fast,  and unforgettable. Whether it’s across the street or across the globe, your message always arrives on time. Our beautifully crafted virtual cards with amazing features makes it effortless to share joy, celebrate milestones, and suprise your loved ones with heartfelt moments.
</p>
                </div>
                <div className="about-image">
                    <div className="carousel-track">
                    
                          <img src="/aboutimg1.png" alt="" />

                    <img src="/aboutimg2.png" alt="" className='scrolldown' />

                    <img src="/aboutimg3.png" alt="" />

                    
                    </div>
                  
                </div>
            </div>
        </section>


    );
};

export default About;