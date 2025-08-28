import './Features.css';

const Features = () => {
    return (
        <section className="features-container">
  {/* Header */}
  <div className="features-header">
    <p className="features-title">
      Check our Gifting <u>Categories</u>
    </p>
    <p className="sub-features-title">
      Explore <span className="blue-highlight">Features</span> that make your <br />
      greetings more personal and <span className="blue-highlight">your gifts</span> meaningful.
    </p>
  </div>

  {/* Main section: list + music card */}
  <div className="features-main">
    {/* Vertical list */}
    <div className="features-list-container">
      <ul className="features-list">
         <li className="feature-item">
              <div className="feature-main">
                <div className="feature-content">
                  <span className="feature-name">Gift Items</span>
                  <button className="plus-btn">+</button>
                </div>
              </div>
            </li>

            <li className="feature-item music">
              <div className="feature-main music-content">
                <div className="feature-content ">
                  
                  <span className="feature-name music-name">Music</span>
                  <button className="minus-btn">-</button>

                
                </div>
                      <div className="feature-description">
                <p>Add your favourite music playlist with friends, family and loved ones. Vibe and dance all through with your preferred artists collections.</p>

                <div className="music-tags">
                <span className="music-tag">Hip-hop</span>
                <span className="music-tag">Afrobeats</span>
                <span className="music-tag">Pop</span>
                <span className="music-tag">Reggae</span>
                <span className="music-tag">Dancehall</span>
                <span className="music-tag">R&B</span>
              </div>
              </div>
              
              </div>
            </li>

                 <li className="feature-item">
              <div className="feature-main">
                <div className="feature-content">
                  <span className="feature-name">Images</span>
                  <button className="plus-btn">+</button>
                </div>
              </div>
            </li>

                <li className="feature-item">
              <div className="feature-main">
                <div className="feature-content">
                  <span className="feature-name">Effects</span>
                  <button className="plus-btn">+</button>
                </div>
              </div>
            </li>

                 <li className="feature-item">
              <div className="feature-main">
                <div className="feature-content">
                  <span className="feature-name">Colors</span>
                  <button className="plus-btn">+</button>
                </div>
              </div>
            </li>

                <li className="feature-item">
              <div className="feature-main">
                <div className="feature-content">
                  <span className="feature-name">Fonts</span>
                  <button className="plus-btn">+</button>
                </div>
              </div>
            </li>

                 <li className="feature-item">
              <div className="feature-main">
                <div className="feature-content">
                  <span className="feature-name">Stickers</span>
                  <button className="plus-btn">+</button>
                </div>
              </div>
            </li>

         <li className="feature-item">
              <div className="feature-main">
                <div className="feature-content">
                  <span className="feature-name">Record Memo</span>
                  <button className="plus-btn">+</button>
                </div>
              </div>
            </li>

      </ul>
    </div>

    {/* Music card beside the list */}
    <div className="music-card">
      <img src="/music-card.png" alt="Music preview"  className="img"/>
    </div>
  </div>
</section>

    );
};

export default Features;