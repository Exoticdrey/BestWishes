import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Newsletter */}
      <div className="newsletter">
        <h2 className="newsletter-title">Newsletter</h2>
        <p>
          Be the first to know about our new card templates, seasonal gift
          collections, and special discounts
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="news-btn">Subscribe</button>
        </div>
      </div>

      {/* Footer Main */}
      <div className="footer-main">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/bwlogo.png" alt="logo" />
          <p>Thoughtful cards. Perfect gifts. Delivered with care.</p>
          <div className="app-links">
            <img src="/google-play.png" alt="Google Play" />
            <img src="/app-store.png" alt="App Store" />
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Quick links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Spin & Win</li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Track Items</li>
            </ul>
          </div>
          <div>
            <h3>Socials</h3>
            <ul>
              <li>TikTok</li>
              <li>LinkedIn</li>
              <li>X (Twitter)</li>
              <li>Snapchat</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          📧 Email us :{" "}
          <a href="mailto:info@bestwishes.com">Support@bestwishes.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
