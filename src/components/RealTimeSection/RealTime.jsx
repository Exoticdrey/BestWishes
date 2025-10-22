import React, { useState } from "react";
import "./RealTime.css";

const RealTime = () => {
const [showModal, setShowModal] = useState(false);
const [showCards, setShowCards] = useState(false);
const [activeSlide, setActiveSlide] = useState(0);

const cardImages = [
"/cards/card1.png",
"/cards/card2.png",
"/cards/card3.png",
"/cards/card4.png",
"/cards/card5.png",
];

const handlePrevSlide = () =>
setActiveSlide((prev) => (prev - 1 + cardImages.length) % cardImages.length);

const handleNextSlide = () =>
setActiveSlide((prev) => (prev + 1) % cardImages.length);

const handleBoxClick = () => setShowCards(true);

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
<a href="#" onClick={() => setShowModal(true)}>
Click Here
</a>
</div>
</div>

{showModal && (
<div className="realtime-overlay">
<div className="realtime-popup">
<button
className="realtime-close"
onClick={() => {
setShowModal(false);
setShowCards(false);
}}
>
✕
</button>

{!showCards ? (
<div className="giftbox-section">
<img
src="/Gift Box.png"
alt="Gift Box"
className="giftbox-img"
onClick={handleBoxClick}
/>
<p className="giftbox-text">Tap the box </p>
</div>
) : (

  
<div className="realtime-slider">
<div className="realtime-slider-wrapper">
{cardImages.map((img, index) => (
<div
key={index}
className={`realtime-slide ${
index === activeSlide ? "active" : ""
}`}
style={{
transform: `translateX(${(index - activeSlide) * 100}%)`,
}}
>
<img src={img} alt={`Card ${index + 1}`} />
</div>
))}
</div>

<div className="realtime-nav">
<button onClick={handlePrevSlide} className="realtime-btn">
&#8249;
</button>
<span>
{activeSlide + 1} of {cardImages.length}
</span>
<button onClick={handleNextSlide} className="realtime-btn">
&#8250;
</button>
</div>
</div>
)}
</div>
</div>
)}
</section>
);
};

export default RealTime;
