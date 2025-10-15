import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const words = ["Send love", "Send Cards", "Send Gifts"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <section className="hero">
      <img src="/Star.png" alt="" className="star top-left" />
      <img src="/Eclipse.png" alt="" className="planet bottom-right" />
      <img src="/Love.png" alt="" className="love top-right" />

      <div className="hero-content">
        <h5>
          <span>
            {displayText}
            <span className="cursor">|</span>
            <img src="/sendlove.png" alt="" className="sendlove-image" />
          </span>
          , Anywhere <br /> Anytime!
        </h5>
        <p>
          The Perfect gift for every moment, <br /> from virtual cards to real
          physical <br /> surprises. Send joy to your loved ones <br /> right on
          time.
        </p>
      </div>

      <div className="cta">
        <Link to="/create-template" className="create">
          Create Your Card
        </Link>
        <Link to="/schedule-card" className="schedule">
          Schedule A Card
        </Link>
      </div>

      <div className="giftbox">
        <img src="/Lovetext.png" alt="" className="top-img" />
        <img src="/giftbox.png" alt="" className="giftbox-image" />
      </div>
    </section>
  );
};

export default Hero;
