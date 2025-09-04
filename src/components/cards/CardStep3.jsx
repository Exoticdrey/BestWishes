import React, { useState } from "react";
import "./CardStep3.css";
import MusicCard from "./MusicCard";
import { Link } from "react-router-dom";
function CardStep3({ onBack, onFinish, formData }) {
  const [showPreview, setShowPreview] = useState(false);
  const [openBox, setOpenBox] = useState(false);

  const handleLivePreview = () => setShowPreview(true);
  const handleClosePreview = () => setShowPreview(false);

  const handleOpenBox = () => setOpenBox(true);

  console.log(formData);

  return (
    <div>
      <div className="preview-container">
        <h2>ADD POP PREVIEW</h2>
        <p>
          Choose a template below to customize. You can customize every design!
        </p>

        <div className="templates-grid">
          <div className="template-item">
            <div className="template-preview">
              <img src="/535.png" alt="previw" />
            </div>
          </div>

          <div className="template-item">
            <div className="template-preview">
              <img src="/536.png" alt="previw" />
            </div>
          </div>

          <div className="template-item">
            <div className="template-preview">
              <img src="/537.png" alt="previw" />
            </div>
          </div>

          <div className="template-item">
            <div className="template-preview">
              <img src="/538.png" alt="previw" />
            </div>
          </div>
        </div>

        <div className="preview-actions">
          <Link
            to="/schedule-card"
            className="back-btn"
            style={{ textDecoration: "none", color: "#000" }}
          >
            Schedule card
          </Link>
          <button
            type="button"
            className="save-btn"
            onClick={handleLivePreview}
          >
            Live Preview
          </button>
          <button type="button" onClick={onFinish} className="finish-btn">
            Send Now
          </button>
        </div>
      </div>
      {showPreview && (
        <div className="preview-overlay">
          <div className="preview-popup">
            <button className="close-btn" onClick={handleClosePreview}>
              Cancel
            </button>

            {/* You can show the selected template or preview content here */}
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6rem",
              }}
            >
              {!openBox ? (
                <>
                  <img
                    src="/Gift Box.png"
                    alt="preview"
                    className="gift-img"
                    onClick={handleOpenBox}
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
                      fontFamily: ' "Life Savers", serif ',
                    }}
                  >
                    Tap on the Box
                  </button>
                </>
              ) : (
                <MusicCard formData={formData} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardStep3;
