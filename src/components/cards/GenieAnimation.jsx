import React, { useEffect, useState } from "react";
import "./GenieAnimation.css";

const GenieAnimation = ({ senderName = "Drey", onComplete, showSkip = true }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Trigger text after genie wave (~2s)
    const textTimer = setTimeout(() => setShowText(true), 2000);

    return () => clearTimeout(textTimer);
  }, []);

  return (
    <div className="genie-animation-container">
      {/* Pink cloud puff */}
      <div className="genie-cloud"></div>

      {/* Pastel Genie */}
      <div className="genie">
        🧚‍♀️
      </div>

      {/* Gold sparkles */}
      <div className="genie-sparkles">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="sparkle">✨</span>
        ))}
      </div>

      {/* Floating text */}
      {showText && (
        <div className="genie-text">
          Hi!<br />
          {senderName} sent you something special ✨
        </div>
      )}

      {/* Skip / Continue */}
      {showSkip && showText && (
        <button className="skip-btn" onClick={onComplete}>
          Skip Animation
        </button>
      )}
    </div>
  );
};

export default GenieAnimation;
