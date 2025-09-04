import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import Features from "../components/FeaturesSection/Features";
import Works from "../components/WorksSection/Works";
import MagicTouch from "../components/TouchSection/MagicTouch";
import Testimonials from "../components/TestimonialsSection/Testimonials";
import SendLove from "../components/SendLoveSection/SendLove";
import RealTime from "../components/RealTimeSection/RealTime";
import MkPlace from "../components/MarketPlaceSection/MkPlace";
import Callta from "../components/CtaSection/Callta";
import Footer from "../components/Footer/Footer"
import './Home.css'

const Home = () => {
  return (
    <>
    
    <Navbar />
    <Hero />
    <Features />
    <Works />
    <MagicTouch />
    <SendLove />
    <RealTime />
    <MkPlace />
    <Testimonials />
    <Callta />
    <Footer />


      {/* Gifting Categories */}
      {/* <section className="features-container">
        <div className="features-header">
          <p className="features-title">Check our Gifting <u>Categories</u></p>
          <p className="sub-features-title">Explore <span className="blue-highlight">Features</span> that make your <br /> greetings more personal and <span className="blue-highlight">your <br />gifts</span> meaningful.</p>
        </div>

        <div className="features-list-container">
          <ul className="features-list">
            <li className="feature-item">
              <div className="feature-main" onClick="toggleFeature(this)">
                <div className="feature-content">
                  <div className="feature-icon">🖼️</div>
                  <div className="feature-name">Gift Items</div>
                  <div className="expand-btn"></div>
                </div>
              </div>
              <div className="feature-description">
                <p>Upload and customize images for your personalized cards and gifts.</p>
              </div>
            </li>

            <li className="feature-item music">
              <div className="feature-main" onClick="toggleFeature(this)">
                <div className="feature-content">
                  <div className="feature-icon">🎵</div>
                  <div className="feature-name">Music</div>
                  <div className="expand-btn"></div>
                </div>
              </div>
              <div className="feature-description">
                <p>Add your favourite music playlist with friends, family and loved ones. Vibe and dance all through with your preferred artists collections.</p>
              </div>
              <div className="music-tags">
                <span className="music-tag">Hip-hop</span>
                <span className="music-tag">Afrobeats</span>
                <span className="music-tag">Pop</span>
                <span className="music-tag">Reggae</span>
                <span className="music-tag">Dancehall</span>
                <span className="music-tag">R&B</span>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-main" onClick="toggleFeature(this)">
                <div className="feature-content">
                  <div className="feature-icon">🖼️</div>
                  <div className="feature-name">Images</div>
                  <div className="expand-btn"></div>
                </div>
              </div>
              <div className="feature-description">
                <p>Upload and customize images for your personalized cards and gifts.</p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-main" onClick="toggleFeature(this)">
                <div className="feature-content">
                  <div className="feature-icon">✨</div>
                  <div className="feature-name">Effects</div>
                  <div className="expand-btn"></div>
                </div>
              </div>
              <div className="feature-description">
                <p>Add stunning visual effects and animations to make your cards come alive.</p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-main" onClick="toggleFeature(this)">
                <div className="feature-content">
                  <div className="feature-icon">🎨</div>
                  <div className="feature-name">Colors</div>
                  <div className="expand-btn"></div>
                </div>
              </div>
              <div className="feature-description">
                <p>Customize colors and themes to match your style and preferences.</p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-main" onClick="toggleFeature(this)">
                <div className="feature-content">
                  <div className="feature-icon">🔤</div>
                  <div className="feature-name">Fonts</div>
                  <div className="expand-btn"></div>
                </div>
              </div>
              <div className="feature-description">
                <p>Choose from a variety of beautiful fonts to express your message perfectly.</p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-main" onClick="toggleFeature(this)">
                <div className="feature-content">
                  <div className="feature-icon">🏷️</div>
                  <div className="feature-name">Stickers</div>
                  <div className="expand-btn"></div>
                </div>
              </div>
              <div className="feature-description">
                <p>Add fun stickers, emojis, and decorative elements to your designs.</p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-main" onClick="toggleFeature(this)">
                <div className="feature-content">
                  <div className="feature-icon">🎤</div>
                  <div className="feature-name">Record Memo</div>
                  <div className="expand-btn"></div>
                </div>
              </div>
              <div className="feature-description">
                <p>Record personalized voice messages to make your gifts even more special.</p>
              </div>
            </li>

          </ul>
        </div>

        <div className="music-card">
          <img src="" alt="" />
        </div>
      </section> */}

      

      {/* How It Works */}
      

      {/* Add Your Magic Touch */}
      

      {/* Send It With Love */}
      

      {/* See Cards in Real Time */}
      

      {/* Marketplace */}
      

      {/* Testimonials */}
      

      {/* Call to Action */}
      

      {/* Newsletter */}
      
    </>
  );
};

export default Home;
