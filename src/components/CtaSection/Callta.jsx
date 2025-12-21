import { Link } from 'react-router-dom';
import './Callta.css';
import { FaGift } from 'react-icons/fa'; 

const Callta = () => {
    return (
        <section className="callta">
            
            <div className="callta-text">
                <h3><span>Ready</span> to Make Their <br />
                Day Better?</h3>

                <p>Pick the perfect surprise, add your personal touch, and send it <br />with love, all in just a few clicks. Loved your experience? <br /> Refer a friend and share the joy!</p>

                <Link to="/refer" className="customize-giftcard-button">Refer Now 
                <div className="gift">
                        <FaGift  className='gift-icon'/>
                    </div> </Link>
            </div>


            <div className="card-image">
                <img src="/scroll.png" alt="" className="card-image-img" />
                <p className='scroll-text top-center'>Thank you for spreading joy!!! <br /><br /> This isn't just a present but a little bundle of joy wrapped in so much love!💖 <br /><br /> The Best Wishes Team✨</p>
            </div>

      </section>
    );
};

export default Callta;