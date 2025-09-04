import { Link } from 'react-router-dom';
import './Callta.css';

const Callta = () => {
    return (
        <section className="callta">
            <div className="card-image">
                <img src="/ctaimg.png" alt="" className="card-image-img" />
            </div>

            <div className="callta-text">
                <h3>Ready to make your <br />
                Loved one's day better?</h3>

                <p>Pick the perfect surprise, add your personal touch, and send it <br />with love, all in just a few clicks. Loved your experience? Refer a friend and share the joy!</p>

                <Link to="/CreateCard" className="customize-giftcard-button">Customize GiftCard</Link>
            </div>
      </section>
    );
};

export default Callta;