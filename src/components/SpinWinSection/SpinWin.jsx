import React, { useState } from "react";
import './SpinWin.css';

const SpinWin = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [name, setName] = useState("");
  const [result, setResult] = useState(""); // store spin result text

  const handleSpin = () => {
    if (name.trim() !== "") {
      const randomDegree = Math.floor(Math.random() * 360) + 720; 
      setSpinning(true);
      setRotation((prev) => prev + randomDegree);

      // temporary "result" text (you can change later when prizes are defined)
      setResult(`🎉 ${name}, you spun the wheel and won a surprise gift!`);
      
      setName(""); 
    }
  };

  // Copy result to clipboard
  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result)
        .then(() => alert("✅ Result copied to clipboard!"))
        .catch(() => alert("❌ Failed to copy"));
    } else {
      alert("Spin the wheel first!");
    }
  };

  // Share result using Web Share API
  const handleShare = () => {
    if (!result) {
      alert("Spin the wheel first!");
      return;
    }
    if (navigator.share) {
      navigator.share({
        title: "My Spin Result",
        text: result,
        url: window.location.href,
      }).catch((error) => console.log("Share failed:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <section className="spin-win">
      <div className="soon"><h2>Coming Soon...</h2></div>
      <div className="spin-container">
        
        <div className="wheel-container">
          <div className="wheel-wrapper">
            {/* Rotating Wheel */}
            <img
              className="spinwin-wheel-img"
              src="/wheel.png"
              alt="Spin the Wheel"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? "transform 3s ease-out" : "none",
              }}
              onTransitionEnd={() => setSpinning(false)}
            />

            {/* Fixed Pin */}
            <img
              className="spinwin-pin"
              src="/Arrow.png"
              alt="Pin"
            />
          </div>

          {/* Input + Button */}
          <div className="spinwin-input-group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name to spin"
              className="spinwin-input"
            />
            <button onClick={handleSpin} className="spinwin-btn">
              Enter →
            </button>
          </div>
        </div>
        
        <div className="spin-text">
          <h3>Go ahead, <br />give it a spin!</h3>

          <p>
            Loved what you got? Share your surprise result <br />
            with your loved one or copy it to send later. <br />
            Spreading joy just got easier!
          </p>

          <div className="share-btn">
            <button onClick={handleShare} className="share">Share</button>
            <button onClick={handleCopy} className="copy">Copy Result</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpinWin;
