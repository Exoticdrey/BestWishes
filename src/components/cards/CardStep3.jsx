
// import React, { useState, useEffect } from "react";
// import "./CardStep3.css";
// import MusicCard from "./MusicCard";
// import confetti from "canvas-confetti";




// function CardStep3({ onFinish, formData, onBack}) {
//   const [showPreview, setShowPreview] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0); // 0 = gift box, 1–5 = card pages
//   const [imagePreview, setImagePreview] = useState(null);
//   const [audioPreview, setAudioPreview] = useState(null);

//   // Create preview URLs for image and audio
//   useEffect(() => {
//     if (formData.image) {
//       setImagePreview(
//         formData.image instanceof File ? URL.createObjectURL(formData.image) : formData.image
//       );
//     }
//     if (formData.voiceNote) {
//       setAudioPreview(
//         formData.voiceNote instanceof Blob ? URL.createObjectURL(formData.voiceNote) : formData.voiceNote
//       );
//     }
//   }, [formData.image, formData.voiceNote]);

//   const handleLivePreview = () => {
//     setShowPreview(true);
//     setCurrentPage(0); // always start with box
//   };

//   const handleClosePreview = () => {
//     setShowPreview(false);
//     setCurrentPage(0);
//   };

//   const handleTapBox = () => {
//     triggerEffect(formData.effect);
//     setCurrentPage(1);
//   };

//   const triggerEffect = (effect) => {
//     switch (effect) {
//       case "confetti":
//         createFloatingElements("🎊", 45, "confetti");
//         break;
//       case "balloons":
//         createFloatingElements("🎈", 25, "balloon");
//         break;
//       case "fireworks":
//         createFloatingElements("🎆", 45, "fireworks");
//         break;
//       case "petals":
//         createFloatingElements("🌸", 30, "petal");
//         break;
//       case "snow":
//         createFloatingElements("❄️", 40, "snowflake");
//         break;
//       default:
//         break;
//     }
//   };

//   const createFloatingElements = (emoji, count, className) => {
//     for (let i = 0; i < count; i++) {
//       const el = document.createElement("div");
//       el.textContent = emoji;
//       el.className = `floating ${className}`;
//       el.style.left = Math.random() * 100 + "vw";
//       el.style.animationDuration = 4 + Math.random() * 3 + "s";
//       document.body.appendChild(el);
//       setTimeout(() => el.remove(), 6000);
//     }
//   };

//   const nextPage = () => {
//     if (currentPage < 5) setCurrentPage((p) => p + 1);
//   };
//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage((p) => p - 1);
//   };

//   const renderPageContent = () => {
//     switch (currentPage) {
//       case 0:
//         return (
//           <>
//             <img
//               src="/Gift Box.png"
//               alt="Gift Box"
//               className="gift-img"
//               onClick={handleTapBox}
//             />
//             <button
//               onClick={handleTapBox}
//               style={{
//                 color: "#fff",
//                 padding: "10px 30px",
//                 border: "none",
//                 backgroundColor: "#d600a3",
//                 fontWeight: "600",
//                 fontSize: "1.1rem",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontFamily: '"Life Savers", serif',
//               }}
//             >
//               Tap on the Box
//             </button>
//           </>
//         );

//       default:
//         return (
//           <MusicCard
//             formData={{
//               ...formData,
//               image: imagePreview,
//               voiceNote: audioPreview,
//             }}
//             showTemplateCover={true}
//             nextPage={nextPage}
//             prevPage={prevPage}
//             customStyle={{
//               fontFamily: formData.fontFamily || "inherit",
//               fontSize: formData.fontSize || "16px",
//               color: "#000",
//             }}
//           />
//         );
//     }
//   };

//   return (
//     <div>
    
//       {/* 🔙 Back Button */}
//       <button type="button" className="back-btns" onClick={onBack} aria-label="Back" style={{ display: "flex", alignItems: "center" }}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icon" style={{ width: "2rem" }}>
//           <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
//         </svg>
//         <strong className="step-title">Media</strong>
//       </button>

//       <div className="preview-container">
//         <h2>ADD POP PREVIEW</h2>
//         <p>Choose a template below to customize. You can customize every design!</p>

//         <div className="templates-grid">
//           <div className="template-item">
//             <div className="template-preview">
//               <img
//                 src={formData.template?.preview || "/535.png"}
//                 alt="preview"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="preview-actions">
//           <button type="button" className="save-btn" onClick={handleLivePreview}>
//             Live Preview
//           </button>
//           <button type="button" onClick={onFinish} className="finish-btn">
//             Send Now
//           </button>
//         </div>
//       </div>

//       {showPreview && (
//         <div className="preview-overlay">
//           <div className="preview-popup">
//             <button className="close-btn" onClick={handleClosePreview}>
//               ✕
//             </button>

//             <div
//               style={{
//                 textAlign: "center",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: "3rem",
//               }}
//             >
//               {renderPageContent()}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CardStep3;





// import React, { useState, useEffect } from "react";
// import "./CardStep3.css";
// import MusicCard from "./MusicCard";
// import confetti from "canvas-confetti";

// function CardStep3({ onFinish, formData, onBack }) {
//   const [showPreview, setShowPreview] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [audioPreview, setAudioPreview] = useState(null);

//   // NEW STATES
//   const [popStyle, setPopStyle] = useState("normal");
//   const [playingMiniPreview, setPlayingMiniPreview] = useState(null);

//   useEffect(() => {
//     if (formData.image) {
//       setImagePreview(
//         formData.image instanceof File
//           ? URL.createObjectURL(formData.image)
//           : formData.image
//       );
//     }
//     if (formData.voiceNote) {
//       setAudioPreview(
//         formData.voiceNote instanceof Blob
//           ? URL.createObjectURL(formData.voiceNote)
//           : formData.voiceNote
//       );
//     }
//   }, [formData.image, formData.voiceNote]);

//   const handleLivePreview = () => {
//     setShowPreview(true);
//     setCurrentPage(0);
//   };

//   const handleClosePreview = () => {
//     setShowPreview(false);
//     setCurrentPage(0);
//   };

//   const handleTapBox = () => {
//     triggerEffect(formData.effect);

//     if (popStyle === "shake") {
//       const box = document.querySelector(".gift-img");
//       if (box) {
//         box.classList.add("shake-pop");
//         setTimeout(() => box.classList.remove("shake-pop"), 900);
//       }
//     }

//     if (popStyle === "genie") {
//       const portal = document.createElement("div");
//       portal.className = "genie-portal";
//       document.body.appendChild(portal);
//       setTimeout(() => portal.remove(), 1600);
//     }

//     setTimeout(() => setCurrentPage(1), 900);
//   };

//   const playMiniPreview = (id) => {
//     setPopStyle(id);
//     setPlayingMiniPreview(id);
//     setTimeout(() => setPlayingMiniPreview(null), 900);
//   };

//   const triggerEffect = (effect) => {
//     switch (effect) {
//       case "confetti":
//         createFloatingElements("🎊", 45, "confetti");
//         break;
//       case "balloons":
//         createFloatingElements("🎈", 25, "balloon");
//         break;
//       case "fireworks":
//         createFloatingElements("🎆", 45, "fireworks");
//         break;
//       case "petals":
//         createFloatingElements("🌸", 30, "petal");
//         break;
//       case "snow":
//         createFloatingElements("❄️", 40, "snowflake");
//         break;
//       default:
//         break;
//     }
//   };

//   const createFloatingElements = (emoji, count, className) => {
//     for (let i = 0; i < count; i++) {
//       const el = document.createElement("div");
//       el.textContent = emoji;
//       el.className = `floating ${className}`;
//       el.style.left = Math.random() * 100 + "vw";
//       el.style.animationDuration = 4 + Math.random() * 3 + "s";
//       document.body.appendChild(el);
//       setTimeout(() => el.remove(), 6000);
//     }
//   };

//   const nextPage = () => currentPage < 5 && setCurrentPage((p) => p + 1);
//   const prevPage = () => currentPage > 1 && setCurrentPage((p) => p - 1);

//   const renderPageContent = () => {
//     if (currentPage === 0) {
//       return (
//         <>
//           <img
//             src="/Gift Box.png"
//             alt="Gift Box"
//             className="gift-img"
//             onClick={handleTapBox}
//           />
//           <button
//             onClick={handleTapBox}
//             style={{
//               color: "#fff",
//               padding: "10px 30px",
//               border: "none",
//               backgroundColor: "#d600a3",
//               fontWeight: "600",
//               fontSize: "1.1rem",
//               borderRadius: "8px",
//               cursor: "pointer",
//               fontFamily: '"Life Savers", serif',
//             }}
//           >
//             Tap on the Box
//           </button>
//         </>
//       );
//     }

//     return (
//       <MusicCard
//         formData={{
//           ...formData,
//           image: imagePreview,
//           voiceNote: audioPreview,
//         }}
//         showTemplateCover={true}
//         nextPage={nextPage}
//         prevPage={prevPage}
//         customStyle={{
//           fontFamily: formData.fontFamily || "inherit",
//           fontSize: formData.fontSize || "16px",
//           color: "#000",
//         }}
//       />
//     );
//   };

//   return (
//     <div>
//       <button type="button" className="back-btns" onClick={onBack} aria-label="Back" style={{ display: "flex", alignItems: "center" }}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icon" style={{ width: "2rem" }}>
//           <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
//         </svg>
//         <strong className="step-title">Media</strong>
//       </button>

//       <div className="preview-container">
//         <h2>POP PREVIEW STYLE</h2>
//         <p>How should your surprise open?</p>

//         {/* POP OPTIONS INSIDE TEMPLATE BOX */}
//         <div className="templates-grid">
//           <div className="template-item">
//             <div
//   className="template-preview"
//   style={{
//     overflowX: "auto",
//     display: "flex",
//     gap: "3rem",
//     padding: "8px 16px",
//     scrollbarWidth: "none",
//     justifyContent: window.innerWidth <= 768 ? "flex-start" : "center",
//     maxWidth: "100vw",
//   }}
// >

//               {[
//                 { id: "normal", emoji: "🎁", label: "No Effect", subtext: "This lovely preview has no effects. just a box to tap and quickly view your card." },
//                 { id: "shake", emoji: "🫨", label: "Shaking Box", subtext: "This one, by the way, has a subtle effect of its own. It is a box that shakes!" },
//                 { id: "genie", emoji: "🧚‍♀️", label: "Genie Pop", subtext: "The premium feel! A genie, floating out to tell you about a card you received? W for WOW!" },
//               ].map((opt) => (
//                 <div
//                   key={opt.id}
//                   onClick={() => playMiniPreview(opt.id)}
//                   className={`pop-preview-card ${
//                     popStyle === opt.id ? "active-glow" : ""
//                   } ${playingMiniPreview === opt.id ? "preview-anim" : ""}`}
//                   style={{
//                     width: "300px",
//                     height: "280px",
//                     borderRadius: "12px",
//                     background: "#fff",
//                     border: popStyle === opt.id ? "2px solid #ee57ba" : "2px solid #eee",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     cursor: "pointer",
//                     fontSize: ".8rem",
//                     transition: ".2s",
//                   }}
//                 >
//                   <span style={{ fontSize: "150px" }}>{opt.emoji}</span>
//                   <p style={{ marginTop: "6px", fontWeight: 500 }}>{opt.label}</p>
//                   {/* <span style={{ marginTop: "-20px", fontWeight: 500, fontSize: "10px" }}>{opt.subtext}</span> */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="preview-actions">
//           <button type="button" className="save-btn" onClick={handleLivePreview}>
//             Live Preview
//           </button>
//           <button type="button" onClick={onFinish} className="finish-btn">
//             Send Now
//           </button>
//         </div>
//       </div>

//       {showPreview && (
//         <div className="preview-overlay">
//           <div className="preview-popup">
//             <button className="close-btn" onClick={handleClosePreview}>✕</button>
//             <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem" }}>
//               {renderPageContent()}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CardStep3;






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
      <div className="genie-emoji">🧚‍♀️</div>
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

// ---------------- CARD STEP 3 ----------------
function CardStep3({ onFinish, formData, onBack }) {
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
                // display:"flex",
                // flexDirection: "column"
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
                { id: "genie", emoji: "🧚‍♀️", label: "Genie Pop" },
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
          <button type="button" onClick={onFinish} className="finish-btn">
            Send Now
          </button>
        </div>
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














