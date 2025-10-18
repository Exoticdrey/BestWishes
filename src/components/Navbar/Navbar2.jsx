import "./Navbar2.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleGetStarted = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSelect = (type) => {
    if (type === "vendor") {
      navigate("/vendor-signup");
    } else if (type === "user") {
      navigate("/createcard");
    }
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">
            <img src="/bwlogo.png" alt="Best Wishes Logo" />
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Marketplace">Marketplace</a></li>
            <li><a href="/Pricing">Pricing</a></li>
            <li><a href="/spinwin">Spin & Win</a></li>
          </ul>

          {/* Desktop Icons */}
          <div className="nav-icons desktop-nav">
            <Link to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </Link>

            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>

          {/* Hamburger Menu */}
          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
            <span className={isMenuOpen ? "active" : ""}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="mobile-nav-links">
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><a href="/About" onClick={closeMenu}>About</a></li>
            <li><a href="/Marketplace" onClick={closeMenu}>Marketplace</a></li>
            <li><a href="/Pricing" onClick={closeMenu}>Pricing</a></li>
            <li><a href="/spinwin" onClick={closeMenu}>Spin & Win</a></li>

            <div className="mobile-nav-icons">
              <Link to="/cart" onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span>Cart</span>
              </Link>

              <button className="get-started-btn-mobile" onClick={() => { closeMenu(); handleGetStarted(); }}>
                Get Started
              </button>
            </div>
          </ul>
        </div>
      </nav>

      {/* Get Started Modal */}
      {showModal && (
        <div className="getstarted-modal-overlay" onClick={closeModal}>
          <div className="getstarted-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Continue as</h2>
            <div className="role-options">
              <div className="role-card" onClick={() => handleSelect("user")}>
                <h3>User</h3>
                <p>Create and personalize heartfelt cards, share memories, and send messages that matter.</p>
              </div>
              <div className="role-card" onClick={() => handleSelect("vendor")}>
                <h3>Vendor</h3>
                <p>Sell your creative products, manage orders, and reach new customers through Best Wishes Marketplace.</p>
              </div>
            </div>
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar2;
