import React from "react";
import { Link } from "react-router-dom";
import "./RealTime.css";

const RealTime = () => {
  return (
    <section className="see-cards">
      <div className="see-cards-head">
        <h3>See Cards In Real Time</h3>
        <p>
          Every card tells a story, explore the latest card trends, favorite <br />
          designs we have for you
        </p>
      </div>

      <div className="realtime-middle">
        <div className="click-card">
          <Link to="/realtime-cards">
            Click Here
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RealTime;