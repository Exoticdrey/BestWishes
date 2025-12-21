

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
const words = ["Send love", "Send Cards", "Send Gifts"];
const [currentWordIndex, setCurrentWordIndex] = useState(0);
const [fadeState, setFadeState] = useState("fade-in");

useEffect(() => {
const interval = setInterval(() => {
setFadeState("fade-out");
setTimeout(() => {
setCurrentWordIndex((prev) => (prev + 1) % words.length);
setFadeState("fade-in");
}, 500); // fade-out duration
}, 3000); // total time before switching words

return () => clearInterval(interval);
}, []);

return (
<section className="hero">
<img src="/Star.png" alt="" className="star top-left" />
<img src="/Eclipse.png" alt="" className="planet bottom-right" />
<img src="/Love.png" alt="" className="love top-right" />

<div className="hero-content">
<h5>
<span className={`fade-text ${fadeState}`}>
{words[currentWordIndex]}
{/* <span className="cursor">|</span> */}
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
<Link to="/schedule-template" className="schedule">
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
