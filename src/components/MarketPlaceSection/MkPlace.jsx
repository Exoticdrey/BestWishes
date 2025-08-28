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
                <div className="marketplace-cards-1">
                    <img src="" alt="" className="marketplace-cards-image" />
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

                <div className="marketplace-cards-2">
                    <img src="" alt="" className="marketplace-cards-image" />
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

                <div className="marketplace-cards-3">
                    <img src="" alt="" className="marketplace-cards-image" />
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
                <Link to="/Marketplace" className="view-marketplace-button">View Marketplace</Link>
            </div>
      </section>
    );
};

export default MkPlace;