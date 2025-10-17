// import React, { useState } from "react";
// import "./CardStep3.css";
// import MusicCard from "./MusicCard";
// import { Link } from "react-router-dom";
// function CardStep3({ onBack, onFinish, formData }) {
//   const [showPreview, setShowPreview] = useState(false);
//   const [openBox, setOpenBox] = useState(false);

//   const handleLivePreview = () => setShowPreview(true);
//   const handleClosePreview = () => setShowPreview(false);

//   const handleOpenBox = () => setOpenBox(true);

//   console.log(formData);

//   return (
//     <div>
//       <div className="preview-container">
//         <h2>ADD POP PREVIEW</h2>
//         <p>
//           Choose a template below to customize. You can customize every design!
//         </p>

//         <div className="templates-grid">
//           <div className="template-item">
//             <div className="template-preview">
//               <img src="/535.png" alt="previw" />
//             </div>
//           </div>

//           <div className="template-item">
//             <div className="template-preview">
//               <img src="/536.png" alt="previw" />
//             </div>
//           </div>

//           <div className="template-item">
//             <div className="template-preview">
//               <img src="/537.png" alt="previw" />
//             </div>
//           </div>

//           <div className="template-item">
//             <div className="template-preview">
//               <img src="/538.png" alt="previw" />
//             </div>
//           </div>
//         </div>

//         <div className="preview-actions">
//           <Link
//             to="/schedule-card"
//             className="back-btn"
//             style={{ textDecoration: "none", color: "#000" }}
//           >
//             Schedule card
//           </Link>
//           <button
//             type="button"
//             className="save-btn"
//             onClick={handleLivePreview}
//           >
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
//               Cancel
//             </button>

//             {/* You can show the selected template or preview content here */}
//             <div
//               style={{
//                 textAlign: "center",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 gap: "6rem",
//               }}
//             >
//               {!openBox ? (
//                 <>
//                   <img
//                     src="/Gift Box.png"
//                     alt="preview"
//                     className="gift-img"
//                     onClick={handleOpenBox}
//                   />
//                   <button
//                     style={{
//                       color: "#fff",
//                       padding: "10px 30px",
//                       border: "none",
//                       backgroundColor: "#d600a3",
//                       fontWeight: "600",
//                       fontSize: "1.1rem",
//                       borderRadius: "8px",
//                       cursor: "pointer",
//                       fontFamily: ' "Life Savers", serif ',
//                     }}
//                   >
//                     Tap on the Box
//                   </button>
//                 </>
//               ) : (
//                 <MusicCard formData={formData} />
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CardStep3;


// import React, { useState } from "react";
// import "./CardStep3.css";
// import MusicCard from "./MusicCard";

// function CardStep3({ onBack, onFinish, formData }) {
//   const [showPreview, setShowPreview] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleLivePreview = () => {
//     setCurrentPage(0);
//     setShowPreview(true);
//   };
//   const handleClosePreview = () => setShowPreview(false);
//   const handleTapBox = () => setCurrentPage(1);

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
//               style={{
//                 color: "#fff",
//                 padding: "10px 30px",
//                 border: "none",
//                 backgroundColor: "#d600a3",
//                 fontWeight: "600",
//                 fontSize: "1.1rem",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontFamily: ' "Life Savers", serif ',
//               }}
//             >
//               Tap on the Box
//             </button>
//           </>
//         );
//       case 1:
//         return (
//           <div className="card-page">
//             <img
//               src={formData.template?.preview || "/535.png"}
//               alt="Template Cover"
//               className="template-cover"
//             />
//             <div className="effect-overlay">{formData.effect}</div>
//           </div>
//         );
//       case 2:
//   return (
//     <div className="card-page">
//       {formData.image && (
//         <img
//           src={
//             formData.image instanceof File
//               ? URL.createObjectURL(formData.image)
//               : formData.image
//           }
//           alt="Selected"
//           className="selected-img"
//         />
//       )}
//       {formData.recipientName && (
//         <h3 className="recipient-name">{formData.recipientName}</h3>
//       )}
//       {formData.quote && <p className="quote-text">{formData.quote}</p>}
//     </div>
//   );

//       case 3:
//       case 4:
//       case 5:
//         // Use MusicCard for pages 3–5
//         return <MusicCard formData={formData} page={currentPage} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="preview-container">
//         <h2>ADD POP PREVIEW</h2>
//         <p>Choose a template below to customize. You can customize every design!</p>

//         <div className="templates-grid">
//           <div className="template-item">
//             <div className="template-preview">
//               <img src={formData.template?.preview || "/535.png"} alt="preview" />
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
//               Cancel
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

//               {currentPage > 0 && currentPage <= 5 && (
//                 <div className="pagination-controls" style={{ marginTop: "1rem" }}>
//                   <button onClick={prevPage} disabled={currentPage === 1}>
//                     Previous
//                   </button>
//                   <span style={{ margin: "0 1rem" }}>{currentPage}/5</span>
//                   <button onClick={nextPage} disabled={currentPage === 5}>
//                     Next
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CardStep3;



// import React, { useState } from "react";
// import "./CardStep3.css";
// import MusicCard from "./MusicCard";

// function CardStep3({ onBack, onFinish, formData }) {
//   const [showPreview, setShowPreview] = useState(false);

//   const handleLivePreview = () => setShowPreview(true);
//   const handleClosePreview = () => setShowPreview(false);

//   return (
//     <div>
//       <div className="preview-container">
//         <h2>ADD POP PREVIEW</h2>
//         <p>Choose a template below to customize. You can customize every design!</p>

//         <div className="templates-grid">
//           <div className="template-item">
//             <div className="template-preview">
//               <img src={formData.template?.preview || "/535.png"} alt="preview" />
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
//               Cancel
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
//               {/* Pass template cover as first slide */}
//               <MusicCard formData={formData} showTemplateCover={true} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CardStep3;





// import React, { useState } from "react";
// import "./CardStep3.css";
// import MusicCard from "./MusicCard";

// function CardStep3({ onFinish, formData }) {
//   const [showPreview, setShowPreview] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0); // 0 = gift box, 1–5 = card pages

//   const handleLivePreview = () => {
//     setShowPreview(true);
//     setCurrentPage(0); // always start with box
//   };

//   const handleClosePreview = () => {
//     setShowPreview(false);
//     setCurrentPage(0);
//   };

//   const handleTapBox = () => setCurrentPage(1);

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
//             formData={formData}
//             showTemplateCover={true}
//             nextPage={nextPage}
//             prevPage={prevPage}
//           />
//         );
//     }
//   };

//   return (
//     <div>
//       <div className="preview-container">
//         <h2>ADD POP PREVIEW</h2>
//         <p>Choose a template below to customize. You can customize every design!</p>

//         <div className="templates-grid">
//           <div className="template-item">
//             <div className="template-preview">
//               <img src={formData.template?.preview || "/535.png"} alt="preview" />
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
//               Cancel
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







// import React, { useState } from "react";
// import "./CardStep3.css";
// import MusicCard from "./MusicCard";

// function CardStep3({ onFinish, formData }) {
//   const [showPreview, setShowPreview] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0); // 0 = gift box, 1–5 = card pages

//   const handleLivePreview = () => {
//     setShowPreview(true);
//     setCurrentPage(0); // always start with box
//   };

//   const handleClosePreview = () => {
//     setShowPreview(false);
//     setCurrentPage(0);
//   };

//   const handleTapBox = () => setCurrentPage(1);

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
//             formData={formData}
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
//               Cancel
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




import React, { useState } from "react";
import "./CardStep3.css";
import MusicCard from "./MusicCard";
import confetti from "canvas-confetti";

function CardStep3({ onFinish, formData }) {
  const [showPreview, setShowPreview] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // 0 = gift box, 1–5 = card pages

  const handleLivePreview = () => {
    setShowPreview(true);
    setCurrentPage(0); // always start with box
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setCurrentPage(0);
  };

  // 🎁 When user taps the box
  const handleTapBox = () => {
    triggerEffect(formData.effect);
    setCurrentPage(1);
  };

  // ⚙️ Function to trigger chosen visual effect
  const triggerEffect = (effect) => {
    switch (effect) {
      case "confetti":
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { y: 0.6 },
        });
        break;

      case "balloons":
        createFloatingElements("🎈", 25, "balloon");
        break;

      case "fireworks":
        for (let i = 0; i < 4; i++) {
          setTimeout(() => {
            confetti({
              particleCount: 100,
              angle: 60 + i * 20,
              spread: 80,
              origin: { x: Math.random(), y: Math.random() * 0.5 },
            });
          }, i * 500);
        }
        break;

      case "petals":
        createFloatingElements("🌸", 30, "petal");
        break;

      case "snow":
        createFloatingElements("❄️", 40, "snowflake");
        break;

      default:
        break;
    }
  };

  // 🎈 Helper for floating emoji animations
  const createFloatingElements = (emoji, count, className) => {
    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.textContent = emoji;
      el.className = `floating ${className}`;
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDuration = 4 + Math.random() * 3 + "s";
      document.body.appendChild(el);

      setTimeout(() => el.remove(), 6000);
    }
  };

  const nextPage = () => {
    if (currentPage < 5) setCurrentPage((p) => p + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 0:
        return (
          <>
            <img
              src="/Gift Box.png"
              alt="Gift Box"
              className="gift-img"
              onClick={handleTapBox}
            />
            <button
              onClick={handleTapBox}
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
              }}
            >
              Tap on the Box
            </button>
          </>
        );

      default:
        return (
          <MusicCard
            formData={formData}
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
    }
  };

  return (
    <div>
      <div className="preview-container">
        <h2>ADD POP PREVIEW</h2>
        <p>Choose a template below to customize. You can customize every design!</p>

        <div className="templates-grid">
          <div className="template-item">
            <div className="template-preview">
              <img
                src={formData.template?.preview || "/535.png"}
                alt="preview"
              />
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
              Cancel
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
