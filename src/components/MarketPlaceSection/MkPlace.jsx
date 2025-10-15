import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MkPlace.css';

const MkPlace = () => {
    return (
        <section className="marketplace">
            <div className="marketplace-head">
                <h3>Our Marketplace</h3>
                <p>Explore a variety of gifts to make, whether birthdays, <br />anniversaries and milestones extra special.</p>
            </div>

            <div className="marketplace-cards">
                <div className="marketplace-cards-sample">
                    <img src="/cake1.png" alt="" className="marketplace-cards-image" />
                    <p className="card-title">
                        Candled Birthday Cake
                    </p>
                    <p className="card-subtitle">
                        Cakes
                    </p>
                    <p className="card-price">
                        #8,500
                    </p>
                    <p className="add-to-cart">
                        <FaShoppingCart /> Add to Cart
                    </p>
                </div>

                <div className="marketplace-cards-sample">
                    <img src="/cake2.png" alt="" className="marketplace-cards-image" />
                    <p className="card-title">
                        Candled Birthday Cake
                    </p>
                    <p className="card-subtitle">
                        Cakes
                    </p>
                    <p className="card-price">
                        #8,500
                    </p>
                    <p className="add-to-cart">
                        <FaShoppingCart /> Add to Cart
                    </p>
                </div>

                <div className="marketplace-cards-sample">
                    <img src="/cke3.png" alt="" className="marketplace-cards-image" />
                    <p className="card-title">
                        Candled Birthday Cake
                    </p>
                    <p className="card-subtitle">
                        Cakes
                    </p>
                    <p className="card-price">
                        #8,500
                    </p>
                    <p className="add-to-cart">
                        <FaShoppingCart /> Add to Cart
                    </p>
                </div>

                <div className="marketplace-cards-sample block">
                    <img src="/cke3.png" alt="" className="marketplace-cards-image" />
                    <p className="card-title">
                        Candled Birthday Cake
                    </p>
                    <p className="card-subtitle">
                        Cakes
                    </p>
                    <p className="card-price">
                        #8,500
                    </p>
                    <p className="add-to-cart">
                        <FaShoppingCart /> Add to Cart
                    </p>
                </div>
            </div>

            <div className="view-marketplace">
                <Link to="/marketplace" className="view-marketplace-button">View Marketplace</Link>
            </div>
      </section>
    );
};

export default MkPlace;