import "./Navbar2.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleGetStarted = () => {
    setShowModal(true);
    document.body.classList.add('modal-open');
  };
  
  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  const handleSelect = (type) => {
    if (type === "vendor") {
      navigate("/vendorsignup");
    } else if (type === "user") {
      navigate("/create-template");
    }
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">
            <img src="/images/logo.svg" alt="Best Wishes Logo" />
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
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="modal-logo">
              <div className="logo-container">
                <span className="logo-text">B</span>
                <span className="logo-heart">♥</span>
              </div>
            </div>
            <h2>Let's Get You Started</h2>
            <p className="modal-subtitle">Please select the option that best describes you to continue...</p>
            <div className="role-options">
              <div className="role-card" onClick={() => handleSelect("user")}>
                <div className="role-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3>Gifter</h3>
                <p>Find unique gifts for the people you care about</p>
                <div className="role-features">
                  <span>Browse Gifts</span>
                  <span>Easy Checkouts</span>
                </div>
                <button className="role-btn gifter-btn">Sign up as a Gifter</button>
              </div>
              <div className="role-card" onClick={() => handleSelect("vendor")}>
                <div className="role-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3>Vendor</h3>
                <p>Sell your products and service to customers looking for the Perfect Gift</p>
                <div className="role-features">
                  <span>Track Orders</span>
                  <span>Grow Business</span>
                </div>
                <button className="role-btn vendor-btn">Sign up as a vendor</button>
              </div>
            </div>
            <div className="modal-footer">
              <span>Already have an account? <a href="/signin">Sign in</a></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar2;
