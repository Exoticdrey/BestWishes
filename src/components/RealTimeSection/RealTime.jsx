import { Link } from 'react-router-dom';
import './RealTime.css';
import React, { useState } from 'react';



const RealTime = () => {




    return (
        <section className="see-cards">
            <div className="see-cards-head">
                <h3>See Cards In Real Time</h3>
                <p>Every card tells a story, explore the latest card trends, favorite <br />designs we have for you</p>

                </div>

            {/* middle section */}
      <div className="realtime-middle">
        <div className="click-card">
          <a href="#">Click Here</a>
        </div>
      </div>
            

    

            
      </section>
    );
};

export default RealTime;