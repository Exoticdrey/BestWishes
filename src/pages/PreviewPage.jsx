// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import MusicCard from "../components/cards/MusicCard";
// import confetti from "canvas-confetti";
// // import "./PreviewPage.css";

// function PreviewPage() {
// const location = useLocation();
// const navigate = useNavigate();
// const formData = location.state?.formData;
// const [currentPage, setCurrentPage] = useState(0); // 0 = gift box, 1 = card

// useEffect(() => {
// if (!formData) {
// navigate("/");
// }
// }, [formData, navigate]);

// const handleTapBox = () => {
// triggerEffect(formData.effect);
// setTimeout(() => setCurrentPage(1), 1000);
// };

// const triggerEffect = (effect) => {
// switch (effect) {
// case "confetti":
// confetti();
// break;
// case "balloons":
// createFloatingElements("🎈", 25);
// break;
// case "fireworks":
// createFloatingElements("🎆", 45);
// break;
// case "petals":
// createFloatingElements("🌸", 30);
// break;
// case "snow":
// createFloatingElements("❄️", 40);
// break;
// default:
// break;
// }
// };

// const createFloatingElements = (emoji, count) => {
// for (let i = 0; i < count; i++) {
// const el = document.createElement("div");
// el.textContent = emoji;
// el.className = "floating-emoji";
// el.style.left = Math.random() * 100 + "vw";
// el.style.animationDuration = 4 + Math.random() * 3 + "s";
// document.body.appendChild(el);
// setTimeout(() => el.remove(), 6000);
// }
// };

// if (!formData) return null;

// return (
// <div className="preview-page">
// <button className="back-btn" onClick={() => navigate(-1)}>
// ← Back
// </button>

// {currentPage === 0 ? (
// <div className="gift-box-container">
// <img
// src="/Gift Box.png"
// alt="Gift Box"
// className="gift-img"
// onClick={handleTapBox}
// />
// <button
// onClick={handleTapBox}
// className="tap-box-btn"
// >
// Tap on the Box
// </button>
// </div>
// ) : (
// <div className="card-fullscreen">
// <MusicCard formData={formData} showTemplateCover={true} />
// </div>
// )}
// </div>
// );
// }

// export default PreviewPage;
