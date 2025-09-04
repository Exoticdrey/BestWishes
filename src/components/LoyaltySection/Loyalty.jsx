import { Link } from 'react-router-dom';
import './Loyalty.css';

const Loyalty = () => {
    return (
        <section className="loyalty">

            <div className="loyalty-title">
                <div className="loyalty-title-text">
                     <h3>Get Your Loyalty Card Now?</h3>
                <p>After 4 purchases in the marketplace, Get 1 free one!</p>
                </div>
               

                   <div className="loyalty-cards">
                <img src="/loyaltycard1.png" alt="" className="loyalty-cards1" />
                <img src="/loyaltycard2.png" alt="" className="loyalty-cards2" />
            </div>
            </div>

         
        </section>
    );
};

export default Loyalty;