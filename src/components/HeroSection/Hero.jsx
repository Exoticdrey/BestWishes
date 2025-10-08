import { Link } from "react-router-dom";
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
          <img src="/Star.png" alt="" className="star top-left" />
          <img src="/Eclipse.png" alt="" className="planet bottom-right" />
          <img src="/Love.png" alt="" className="love top-right" />
        <div className="hero-content">
          <h5>
            <span>Send love <img src="/sendlove.png" alt="" className="sendlove-image" /></span>
            <img src="" alt="" />, Anywhere <br /> Anytime!</h5>
        <p>
          The Perfect gift for every moment, <br/> from virtual cards to real physical <br/> surprises. Send joy to your loved ones <br/> right on time.</p>
        </div>

        <div className="cta">
          <Link to="/create-template" className="create">Create Your Card</Link>
          <Link to="/schedule-card" className="schedule">Schedule A Card</Link>
        </div>

        <div className="giftbox">
          <img src="/Lovetext.png" alt="" className="top-img" />
          <img src="/giftbox.png" alt="" className="giftbox-image"/>
        </div>
      </section>
    );
};

export default Hero;