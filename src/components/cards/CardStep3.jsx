import React, { useState, useEffect } from "react";
import "./CardStep3.css";
import MusicCard from "./MusicCard";
import confetti from "canvas-confetti";

// ---------------- GENIE COMPONENT ----------------
const GenieAnimation = ({ senderName = "", onFinish }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowText(true), 2500); // show text after ~2.5s
    const timer2 = setTimeout(() => onFinish(), 5000); // auto next after ~5s
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className="genie-container">
      <div className="pink-cloud"></div>
      <div className="pink-smoke"></div>
      <div className="genie-emoji">🧚♀️</div>
      <div className="sparkles">✨✨✨</div>
      {showText && (
        <>
          <div className="genie-text">
            Hi! {senderName} sent you something special ✨
          </div>
          <button className="genie-skip-btn" onClick={onFinish}>
            Skip Animation
          </button>
        </>
      )}
    </div>
  );
};

function CardStep3({ onFinish, formData, onBack, submitState }) {
  const [showPreview, setShowPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [imagePreview, setImagePreview] = useState(null);
  const [audioPreview, setAudioPreview] = useState(null);

  const [popStyle, setPopStyle] = useState("normal");
  const [playingMiniPreview, setPlayingMiniPreview] = useState(null);

  useEffect(() => {
    if (formData.image) {
      setImagePreview(
        formData.image instanceof File
          ? URL.createObjectURL(formData.image)
          : formData.image
      );
    }
    if (formData.voiceNote) {
      setAudioPreview(
        formData.voiceNote instanceof Blob
          ? URL.createObjectURL(formData.voiceNote)
          : formData.voiceNote
      );
    }
  }, [formData.image, formData.voiceNote]);

  const handleLivePreview = () => {
    setShowPreview(true);
    setCurrentPage(0);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setCurrentPage(0);
  };

  const playMiniPreview = (id) => {
    setPopStyle(id);
    setPlayingMiniPreview(id);
    setTimeout(() => setPlayingMiniPreview(null), 900);
  };

  const nextPage = () => currentPage < 5 && setCurrentPage((p) => p + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage((p) => p - 1);

  const renderPageContent = () => {
    if (currentPage === 0) {
      if (popStyle === "shake") {
        return (
          <div className="shake-box-container" style={{border: "", display: "flex", flexDirection: "column"}} onClick={() => setCurrentPage(1)}>
            <img src="/Gift Box.png" alt="Gift Box"  style={{border: ""}}  className="gift-img shake-loop" />
            <button
              style={{
                color: "#fff",
                padding: "10px 30px",
                width: "200px",
                border: "none",
                margin: "auto",
                backgroundColor: "#d600a3",
                fontWeight: "600",
                fontSize: "1.1rem",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: '"Life Savers", serif',
                marginTop: "15px",
              }}
            >
              Tap on the Box
            </button>
          </div>
        );
      }

      if (popStyle === "genie") {
        return <GenieAnimation senderName={formData.senderName || ""} onFinish={() => setCurrentPage(1)} />;
      }

      // Normal
      return (
        <>
          <img
            src="/Gift Box.png"
            alt="Gift Box"
            className="gift-img"
            onClick={() => setCurrentPage(1)}
          />
          <button
            style={{
              color: "#fff",
              padding: "10px 30px",
              border: "none",
              backgroundColor: "#d600a3",
              fontWeight: "600",
              fontSize: "1.1rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontFamily: '"Life Savers", serif',
              marginTop: "15px",
            }}
          >
            Tap on the Box
          </button>
        </>
      );
    }

    return (
      <MusicCard
        formData={{
          ...formData,
          image: imagePreview,
          voiceNote: audioPreview,
        }}
        showTemplateCover={true}
        nextPage={nextPage}
        prevPage={prevPage}
        customStyle={{
          fontFamily: formData.fontFamily || "inherit",
          fontSize: formData.fontSize || "16px",
          color: "#000",
        }}
      />
    );
  };

  return (
    <div>
      <button
        type="button"
        className="back-btns"
        onClick={onBack}
        aria-label="Back"
        style={{ display: "flex", alignItems: "center" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="icon"
          style={{ width: "2rem" }}
        >
          <path
            fillRule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        <strong className="step-title">Media</strong>
      </button>

      <div className="preview-container">
        <h2>POP PREVIEW STYLE</h2>
        <p>How should your surprise open?</p>

        {/* POP OPTIONS */}
        <div className="templates-grid">
          <div className="template-item">
            <div
              className="template-preview"
              style={{
                overflowX: "auto",
                display: "flex",
                gap: "3rem",
                padding: "8px 16px",
                scrollbarWidth: "none",
                justifyContent: window.innerWidth <= 768 ? "flex-start" : "center",
                maxWidth: "100vw",
              }}
            >
              {[
                { id: "normal", emoji: "🎁", label: "No Effect" },
                { id: "shake", emoji: "🫨", label: "Shaking Box" },
                { id: "genie", emoji: "🧚♀️", label: "Genie Pop" },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => playMiniPreview(opt.id)}
                  className={`pop-preview-card ${
                    popStyle === opt.id ? "active-glow" : ""
                  } ${playingMiniPreview === opt.id ? "preview-anim" : ""}`}
                  style={{
                    width: "300px",
                    height: "280px",
                    borderRadius: "12px",
                    background: "#fff",
                    border: popStyle === opt.id ? "2px solid #ee57ba" : "2px solid #eee",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: ".8rem",
                    transition: ".2s",
                  }}
                >
                  <span style={{ fontSize: "150px" }}>{opt.emoji}</span>
                  <p style={{ marginTop: "6px", fontWeight: 500 }}>{opt.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="preview-actions">
          <button type="button" className="save-btn" onClick={handleLivePreview}>
            Live Preview
          </button>
          <button
            type="button"
            onClick={onFinish}
            className="finish-btn"
            disabled={submitState?.loading}
          >
            {submitState?.loading ? "Sending..." : "Send Now"}
          </button>
        </div>
        {submitState?.error && (
          <div className="submit-error" role="alert">
            {submitState.error}
          </div>
        )}
        {submitState?.message && !submitState?.error && (
          <div className="submit-success" role="status">
            {submitState.message}
          </div>
        )}
      </div>

      {showPreview && (
        <div className="preview-overlay">
          <div className="preview-popup">
            <button className="close-btn" onClick={handleClosePreview}>
              ✕
            </button>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "3rem",
              }}
            >
              {renderPageContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardStep3;