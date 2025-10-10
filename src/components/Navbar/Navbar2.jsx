import "./Navbar2.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <img src="/bwlogo.png" alt="Best Wishes Logo" />
        </a>


        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">

        {/* <ul className="nav-links"> */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Marketplace">Marketplace</a>
          </li>
          <li>
            <a href="/Pricing">Pricing</a>
          </li>
          <li>
            <a href="/spinwin">Spin & Win</a>
          </li>

          
        </ul>


        {/* Desktop Icons */}
        <div className="nav-icons desktop-nav">
          <Link to="/cart">

        {/* <div className="nav-icons"> */}
          {/* Cart Icon */}
          {/* <Link to="/Cart"> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>


          <Link to="/signup">

          {/* Profile Icon */}
          {/* <Link to="/Signup"> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0v.75H4.5v-.75Z"
              />
            </svg>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <a href="/" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="/About" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="/Marketplace" onClick={closeMenu}>Marketplace</a>
          </li>
          <li>
            <a href="/Pricing" onClick={closeMenu}>Pricing</a>
          </li>
          <li>
            <a href="/spinwin" onClick={closeMenu}>Spin & Win</a>
          </li>

          
          <div className="mobile-nav-icons">
          <Link to="/cart" onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span>Cart</span>
          </Link>

          <Link to="/signup" onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0v.75H4.5v-.75Z"
              />
            </svg>
            <span>Profile</span>
          </Link>
        </div>
        </ul>

        
      </div>
    </nav>
  );
}

export default Navbar2;