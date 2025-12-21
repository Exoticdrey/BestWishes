import confetti from "canvas-confetti";
import { useState } from "react";
import { Link } from "react-router-dom";
import MusicCard from "../components/cards/MusicCard";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/Navbar/Navbar2";
import Referral from "../components/referral";
import "./RealTimeCards.css";

const RealTimeCards = () => {
  const [showCards, setShowCards] = useState(false);

  // Demo data for the "Real Life Example"
  const demoData = {
    quote: "My Love💕",
    recipient: "Drey 💕",
    message:
      "Just a little something to make you smile today 💌 You've always been my calm, my chaos, and everything in between.",
    imageUrl: "/demo-image.jpg",
    template: { preview: "/templates/birthday1.webp" },
    musicUrl: "https://open.spotify.com/track/6dOtVTDdiauQNBQEDOtlAB?si=82b0ceabf3134c76",
    voiceUrl: "/demo-audio.mp3",
    effect: "confetti",
    fontFamily: "Life Savers",
    fontSize: "18px",
    senderName: "Your D",
    textColor: "red",
    backgroundColor: "#ffffff"
  };

  // Trigger realistic celebration when gift box is tapped
  const handleBoxClick = () => {
    triggerEffect(demoData.effect);
    setTimeout(() => {
      setShowCards(true);
    }, 1000);
  };

  const triggerEffect = (effect) => {
    if (effect === "confetti") {
      const duration = 1.5 * 1000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();

      const audio = new Audio("/Voicy_Confetti.mp3");
      audio.play().catch(() => {});
    }
  };

  return (
    <>
      <Referral />
      <Navbar2 />
      <section className="realtime-cards-page">
        <div className="realtime-header">
          <h1>See Cards In Real Time</h1>
          <p>
            Every card tells a story, explore the latest card trends, favorite
            designs we have for you
          </p>
        </div>

        <div className="realtime-content">
          {!showCards ? (
            <div className="giftbox-section">
              <img
                src="/Gift Box.png"
                alt="Gift Box"
                className="giftbox-img"
                onClick={handleBoxClick}
              />
              <p className="giftbox-text">Tap the box</p>
            </div>
          ) : (
            <div className="realtime-card-preview">
              <MusicCard
                formData={demoData}
                showTemplateCover={true}
                nextPage={() => {}}
                prevPage={() => {}}
                customStyle={{
                  fontFamily: demoData.fontFamily,
                  fontSize: demoData.fontSize,
                  color: "#000",
                }}
              />
            </div>
          )}
        </div>

        <div className="realtime-actions">
          <Link to="/" className="back-btn">Back to Home</Link>
          <Link to="/create-template" className="create-btn">Create Your Own Card</Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default RealTimeCards;