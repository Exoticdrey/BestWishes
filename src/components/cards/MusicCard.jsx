
// import React, { useState } from "react";
// import "./MusicCard.css";

// const MusicCard = ({ formData, showTemplateCover = false }) => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   // Convert Spotify URL to embed form
//   const getSpotifyEmbedUrl = (url) => {
//     if (!url) return null;
//     if (url.includes("open.spotify.com/track/")) {
//       return url.replace(
//         "open.spotify.com/track/",
//         "open.spotify.com/embed/track/"
//       );
//     }
//     return null;
//   };

//   const generateSlides = () => {
//     const slides = [];

//     // Template cover slide
//     if (showTemplateCover) {
//       slides.push({
//         design: "template-cover",
//         image: formData.template?.preview || "/535.png",
//         isCover: true,
//       });
//     }

//     // Main card slide
//     slides.push({
//       design: formData.eventType || "default",
//       image: formData.imageUrl || formData.image,
//       title: formData.recipient || "Your Friend",
//       message: formData.quote || "",
//       musicUrl: formData.musicUrl,
//       backgroundColor: "#fcfbef",
//       fontFamily: formData.fontFamily || "inherit",
//       fontSize: formData.fontSize || 24,
//       textColor: formData.textColor || "#000",
//     });

//     // Voice slide
//     if (formData.voiceUrl) {
//       slides.push({
//         design: "voice",
//         title: "Voice Note!💖",
//         musicUrl: formData.voiceUrl,
//         backgroundColor: "#fcfbef",
//         fontFamily: formData.fontFamily || "inherit",
//         fontSize: formData.fontSize || 24,
//         textColor: formData.textColor || "#000",
//       });
//     }

//     // Music slide
//     if (formData.musicUrl) {
//       slides.push({
//         design: "music",
//         title: "Music?🎵",
//         musicUrl: formData.musicUrl,
//         backgroundColor: "#fcfbef",
//         fontFamily: formData.fontFamily || "inherit",
//         fontSize: formData.fontSize || 24,
//         textColor: formData.textColor || "#000",
//       });
//     }

//     // Heartfelt message slide
//     if (formData.message) {
//       slides.push({
//         design: "message",
//         title: "Message^_^",
//         message: formData.message,
//         backgroundColor: "#fcfbef",
//         fontFamily: formData.fontFamily || "inherit",
//         fontSize: formData.fontSize || 24,
//         textColor: formData.textColor || "#000",
//         senderName:
//           formData.isAnonymous === true
//             ? "~anon"
//             : formData.senderName
//             ? `~${formData.senderName}`
//             : "",
//       });
//     }

//     return slides;
//   };

//   const slides = generateSlides();

//   const handlePrevSlide = () =>
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   const handleNextSlide = () =>
//     setActiveSlide((prev) => (prev + 1) % slides.length);

//   const getSlideStyle = (index) => {
//     const offset = index - activeSlide;
//     const absOffset = Math.abs(offset);
//     if (absOffset > 2) {
//       return {
//         opacity: 0,
//         transform: "translateX(200px) scale(0.5)",
//         pointerEvents: "none",
//       };
//     }
//     const translateX = offset * 9;
//     const rotate = offset * 3;
//     const scale = index === activeSlide ? 1 : 0.85;
//     const zIndex = slides.length - absOffset;

//     return {
//       transform: `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
//       zIndex,
//       opacity: 1,
//       transition: "all 0.2s ease",
//     };
//   };

//   return (
//     <div className="swiper-container">
//       <div className="swiper">
//         <div className="swiper-wrapper">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`swiper-slide ${index === activeSlide ? "active" : ""}`}
//               style={{
//                 ...getSlideStyle(index),
//                backgroundColor: slide.isCover ? "#fcfbef" : slide.backgroundColor,
//                 fontFamily: slide.fontFamily,
//                 width: "350px",
//                 height: "350px",
//               }}
//             >
//               <div className={`card-preview ${slide.design}`}>
//                 {/* Image */}
//                 {slide.image && (
//                   <img
//                     style={{ marginTop: "" }}
//                     src={slide.image}
//                     alt="Card Visual" className="preview-img" className= {`card-img ${slide.musicUrl ? "has-spotify" : "no-spotify"}`}
//                   />
//                 )}

//                 {/* Title */}
//                 {slide.title && (
//                   <h2
//                     style={{
//                       fontSize: slide.fontSize,
//                       color: slide.textColor,
//                     }}
//                   >
//                     {slide.title}
//                   </h2>
//                 )}

//                 {/* Message */}
//                 {slide.message && (
//                   <>
//                     <p
//                       style={{
//                         fontSize: slide.fontSize,
//                         marginBottom: "10px",
//                         marginTop: "10px",
//                         color: slide.textColor,
//                         textAlign: "center",
//                         whiteSpace: "pre-line",
//                       }}
//                     >
//                       {slide.message}
//                       {slide.senderName && (
//                       <p
//                         style={{
//                           fontStyle: "italic",
//                           color: slide.textColor,
//                           fontSize: "0.8em",
//                           textAlign: "center",
//                           marginTop: "15px",
//                           opacity: 0.8,
//                         }}
//                       >
//                         {slide.senderName}
//                       </p>
//                     )}
//                     </p>

//                     {/* Sender/Anon signature under message */}
                    
//                   </>
//                 )}

//                 {/* Audio or Spotify */}
//                 {slide.musicUrl &&
//                   (getSpotifyEmbedUrl(slide.musicUrl) ? (
//                     <iframe
//                       src={getSpotifyEmbedUrl(slide.musicUrl)}
//                       width="100%"
//                       height="90"
//                       frameBorder="0"
//                       allow="encrypted-media"
//                       title="Spotify Preview"
//                       className="spot" style={{ width: "", marginTop: "", justifyContent: "", border: "", borderRadius: "12px" }}
//                     ></iframe>
//                   ) : (
//                     <audio
//                       controls
//                       style={{ width: "300px", marginTop: "20px", justifyContent: "", border: "2px solid var(--primary-color)", borderRadius: "50px" }}
//                     >
//                       <source src={slide.musicUrl} type="audio/mpeg" />
//                       Your browser does not support the audio element.
//                     </audio>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="swiper-navigation">
//         <button className="prev-btn-card swiper-btn" onClick={handlePrevSlide}>
//           &#8249;
//         </button>
//         <span>
//           {activeSlide + 1} out of {slides.length}
//         </span>
//         <button className="next-btn-card swiper-btn" onClick={handleNextSlide}>
//           &#8250;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MusicCard;



// import React, { useState } from "react";
// import "./MusicCard.css";

// const MusicCard = ({ formData, showTemplateCover = false }) => {
// const [activeSlide, setActiveSlide] = useState(0);

// // Convert Spotify URL to embed form
// const getSpotifyEmbedUrl = (url) => {
// if (!url) return null;
// if (url.includes("open.spotify.com/track/")) {
// return url.replace(
// "open.spotify.com/track/",
// "open.spotify.com/embed/track/"
// );
// }
// return null;
// };

// const generateSlides = () => {
// const slides = [];

// // Template cover slide
// if (showTemplateCover) {
// slides.push({
// design: "template-cover",
// image: formData.template?.preview || "/535.png",
// isCover: true,
// });
// }

// // Main card slide
// slides.push({
// design: formData.eventType || "default",
// image: formData.imageUrl || formData.image,
// title: formData.recipient || "Your Friend",
// message: formData.quote || "",
// musicUrl: formData.musicUrl,
// backgroundColor: "#fcfbef",
// fontFamily: formData.fontFamily || "inherit",
// fontSize: formData.fontSize || 24,
// textColor: formData.textColor || "#000",
// });

// // Voice slide
// if (formData.voiceUrl) {
// slides.push({
// design: "voice",
// title: "Voice Note!💖",
// musicUrl: formData.voiceUrl,
// backgroundColor: "#fcfbef",
// fontFamily: formData.fontFamily || "inherit",
// fontSize: formData.fontSize || 24,
// textColor: formData.textColor || "#000",
// });
// }

// // Music slide
// if (formData.musicUrl) {
// slides.push({
// design: "music",
// title: "Music?🎵",
// musicUrl: formData.musicUrl,
// backgroundColor: "#fcfbef",
// fontFamily: formData.fontFamily || "inherit",
// fontSize: formData.fontSize || 24,
// textColor: formData.textColor || "#000",
// });
// }

// // Heartfelt message slide
// if (formData.message) {
// slides.push({
// design: "message",
// title: "Message^_^",
// message: formData.message,
// backgroundColor: "#fcfbef",
// fontFamily: formData.fontFamily || "inherit",
// fontSize: formData.fontSize || 24,
// textColor: formData.textColor || "#000",
// senderName:
// formData.isAnonymous === true
// ? "~anon"
// : formData.senderName
// ? `~${formData.senderName}`
// : "",
// });
// }

// return slides;
// };

// const slides = generateSlides();

// const handlePrevSlide = () =>
// setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
// const handleNextSlide = () =>
// setActiveSlide((prev) => (prev + 1) % slides.length);

// const getSlideStyle = (index) => {
// const offset = index - activeSlide;
// const absOffset = Math.abs(offset);
// if (absOffset > 2) {
// return {
// opacity: 0,
// transform: "translateX(200px) scale(0.5)",
// pointerEvents: "none",
// };
// }
// const translateX = offset * 9;
// const rotate = offset * 3;
// const scale = index === activeSlide ? 1 : 0.85;
// const zIndex = slides.length - absOffset;

// return {
// transform: `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
// zIndex,
// opacity: 1,
// transition: "all 0.2s ease",
// };
// };

// return (
// <div className="swiper-container">
// <div className="swiper">
// <div className="swiper-wrapper">
// {slides.map((slide, index) => (
// <div
// key={index}
// className={`swiper-slide ${
// index === activeSlide ? "active slide-animate" : ""
// }`}
// style={{
// ...getSlideStyle(index),
// backgroundColor: slide.isCover ? "#fcfbef" : slide.backgroundColor,
// fontFamily: slide.fontFamily,
// width: "350px",
// height: "350px",
// }}
// >
// <div className={`card-preview ${slide.design}`}>
// {/* Image */}
// {slide.image && (
// <img
// src={slide.image}
// alt="Card Visual"
// className={`card-img ${
// slide.musicUrl ? "has-spotify" : "no-spotify"
// }`}
// />
// )}

// {/* Title */}
// {slide.title && (
// <h2
// style={{
// fontSize: slide.fontSize,
// color: slide.textColor,
// }}
// >
// {slide.title}
// </h2>
// )}

// {/* Message */}
// {slide.message && (
// <>
// <p
// style={{
// fontSize: slide.fontSize,
// marginBottom: "10px",
// marginTop: "10px",
// color: slide.textColor,
// textAlign: "center",
// whiteSpace: "pre-line",
// }}
// >
// {slide.message}
// {slide.senderName && (
// <p
// style={{
// fontStyle: "italic",
// color: slide.textColor,
// fontSize: "0.8em",
// textAlign: "center",
// marginTop: "15px",
// opacity: 0.8,
// }}
// >
// {slide.senderName}
// </p>
// )}
// </p>
// </>
// )}

// {/* Audio or Spotify */}
// {slide.musicUrl &&
// (getSpotifyEmbedUrl(slide.musicUrl) ? (
// <iframe
// src={getSpotifyEmbedUrl(slide.musicUrl)}
// width="100%"
// height="90"
// frameBorder="0"
// allow="encrypted-media"
// title="Spotify Preview"
// className="spot"
// style={{
// borderRadius: "12px",
// }}
// ></iframe>
// ) : (
// <audio
// controls
// style={{
// width: "300px",
// marginTop: "20px",
// border: "2px solid var(--primary-color)",
// borderRadius: "50px",
// }}
// >
// <source src={slide.musicUrl} type="audio/mpeg" />
// Your browser does not support the audio element.
// </audio>
// ))}
// </div>
// </div>
// ))}
// </div>
// </div>

// <div className="swiper-navigation">
// <button className="prev-btn-card swiper-btn" onClick={handlePrevSlide}>
// &#8249;
// </button>
// <span>
// {activeSlide + 1} out of {slides.length}
// </span>
// <button className="next-btn-card swiper-btn" onClick={handleNextSlide}>
// &#8250;
// </button>
// </div>
// </div>
// );
// };

// export default MusicCard;




// import React, { useState } from "react";
// import "./MusicCard.css";

// const MusicCard = ({ formData, showTemplateCover = false }) => {
// const [activeSlide, setActiveSlide] = useState(0);

// // Convert Spotify URL to embed form
// const getSpotifyEmbedUrl = (url) => {
// if (!url) return null;
// if (url.includes("open.spotify.com/track/")) {
// return url.replace(
// "open.spotify.com/track/",
// "open.spotify.com/embed/track/"
// );
// }
// return null;
// };

// const generateSlides = () => {
// const slides = [];

// // Template cover slide
// if (showTemplateCover) {
// slides.push({
// design: "template-cover",
// image: formData.template?.preview || "/535.png",
// isCover: true,
// });
// }

// // Main card slide
// slides.push({
// design: formData.eventType || "default",
// image: formData.imageUrl || formData.image,
// title: formData.recipient || "Your Friend",
// message: formData.quote || "",
// musicUrl: formData.musicUrl,
// backgroundColor: "#fcfbef",
// fontFamily: formData.fontFamily || "inherit",
// fontSize: formData.fontSize || 24,
// textColor: formData.textColor || "#000",
// });

// // Voice slide
// if (formData.voiceUrl) {
// slides.push({
// design: "voice",
// title: "Voice Note!💖",
// musicUrl: formData.voiceUrl,
// backgroundColor: "#fcfbef",
// fontFamily: formData.fontFamily || "inherit",
// fontSize: formData.fontSize || 24,
// textColor: formData.textColor || "#000",
// });
// }

// // Music slide
// if (formData.musicUrl) {
// slides.push({
// design: "music",
// title: "Music?🎵",
// musicUrl: formData.musicUrl,
// backgroundColor: "#fcfbef",
// fontFamily: formData.fontFamily || "inherit",
// fontSize: formData.fontSize || 24,
// textColor: formData.textColor || "#000",
// });
// }

// // Heartfelt message slide
// if (formData.message) {
// slides.push({
// design: "message",
// title: "Message^_^",
// message: formData.message,
// backgroundColor: "#fcfbef",
// fontFamily: formData.fontFamily || "inherit",
// fontSize: formData.fontSize || 24,
// textColor: formData.textColor || "#000",
// senderName:
// formData.isAnonymous === true
// ? "~anon"
// : formData.senderName
// ? `~${formData.senderName}`
// : "",
// });
// }

// return slides;
// };

// const slides = generateSlides();

// const handlePrevSlide = () =>
// setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
// const handleNextSlide = () =>
// setActiveSlide((prev) => (prev + 1) % slides.length);

// const getSlideStyle = (index) => {
// const offset = index - activeSlide;
// const absOffset = Math.abs(offset);
// if (absOffset > 2) {
// return {
// opacity: 0,
// transform: "translateX(200px) scale(0.5)",
// pointerEvents: "none",
// };
// }
// const translateX = offset * 9;
// const rotate = offset * 3;
// const scale = index === activeSlide ? 1 : 0.85;
// const zIndex = slides.length - absOffset;

// return {
// transform: `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
// zIndex,
// opacity: 1,
// transition: "all 0.2s ease",
// };
// };

// return (
// <div className="swiper-container">
// <div className="swiper">
// <div className="swiper-wrapper">
// {slides.map((slide, index) => (
// <div
// key={index}
// className={`swiper-slide ${index === activeSlide ? "active" : ""}`}


// style={{
// ...getSlideStyle(index),
// backgroundColor: slide.isCover ? "#fcfbef" : slide.backgroundColor,
// fontFamily: slide.fontFamily,
// width: "350px",
// height: "350px",
// // position: "relative",
// overflow: "hidden",
// }}
// >
// {/* Sparkles, Hearts & Shimmer Effects */}
// <div className="floating-effects">
// <div className="hearts"></div>
// <div className="sparkles"></div>
// <div className="shimmer"></div>
// </div>

// <div className={`card-preview ${slide.design}`}>
// {/* Image */}
// {slide.image && (
// <img
// src={slide.image}
// alt="Card Visual"
// className={`card-img ${slide.musicUrl ? "has-spotify" : "no-spotify"}`}
// />
// )}

// {/* Title */}
// {slide.title && (
// <h2
// style={{
// fontSize: slide.fontSize,
// color: slide.textColor,
// }}
// >
// {slide.title}
// </h2>
// )}

// {/* Message */}
// {slide.message && (
// <>
// <p
// style={{
// fontSize: slide.fontSize,
// marginBottom: "10px",
// marginTop: "10px",
// color: slide.textColor,
// textAlign: "center",
// whiteSpace: "pre-line",
// }}
// >
// {slide.message}
// {slide.senderName && (
// <p
// style={{
// fontStyle: "italic",
// color: slide.textColor,
// fontSize: "0.8em",
// textAlign: "center",
// marginTop: "15px",
// opacity: 0.8,
// }}
// >
// {slide.senderName}
// </p>
// )}
// </p>
// </>
// )}

// {/* Audio or Spotify */}
// {slide.musicUrl &&
// (getSpotifyEmbedUrl(slide.musicUrl) ? (
// <iframe
// src={getSpotifyEmbedUrl(slide.musicUrl)}
// width="100%"
// height="90"
// frameBorder="0"
// allow="encrypted-media"
// title="Spotify Preview"
// className="spot"
// style={{ borderRadius: "12px" }}
// ></iframe>
// ) : (
// <audio
// controls
// style={{
// width: "300px",
// marginTop: "20px",
// border: "2px solid var(--primary-color)",
// borderRadius: "50px",
// }}
// >
// <source src={slide.musicUrl} type="audio/mpeg" />
// Your browser does not support the audio element.
// </audio>
// ))}
// </div>
// </div>
// ))}
// </div>
// </div>

// <div className="swiper-navigation">
// <button className="prev-btn-card swiper-btn" onClick={handlePrevSlide}>
// &#8249;
// </button>
// <span>
// {activeSlide + 1} out of {slides.length}
// </span>
// <button className="next-btn-card swiper-btn" onClick={handleNextSlide}>
// &#8250;
// </button>
// </div>
// </div>
// );
// };

// export default MusicCard;





import React, { useState } from "react";
import "./MusicCard.css";

const MusicCard = ({ formData, showTemplateCover = false }) => {
const [activeSlide, setActiveSlide] = useState(0);

// Convert Spotify URL to embed form
const getSpotifyEmbedUrl = (url) => {
if (!url) return null;
if (url.includes("open.spotify.com/track/")) {
return url.replace(
"open.spotify.com/track/",
"open.spotify.com/embed/track/"
);
}
return null;
};

const generateSlides = () => {
const slides = [];

// Template cover slide
if (showTemplateCover) {
slides.push({
design: "template-cover",
image: formData.template?.preview || "/535.png",
isCover: true,
});
}

// Main card slide
slides.push({
design: formData.eventType || "default",
image: formData.imageUrl || formData.image,
title: formData.recipient || "Your Friend",
message: formData.quote || "",
musicUrl: formData.musicUrl,
backgroundColor: "#ffffff",
fontFamily: formData.fontFamily || "inherit",
fontSize: formData.fontSize || 24,
textColor: formData.textColor || "#000",
});

// Voice slide
if (formData.voiceUrl) {
slides.push({
design: "voice",
title: "Voice Note!💖",
musicUrl: formData.voiceUrl,
backgroundColor: "#ffffff",
fontFamily: formData.fontFamily || "inherit",
fontSize: formData.fontSize || 24,
textColor: formData.textColor || "#000",
});
}

// Music slide
if (formData.musicUrl) {
slides.push({
design: "music",
title: "Music?🎵",
musicUrl: formData.musicUrl,
backgroundColor: "#ffffff",
fontFamily: formData.fontFamily || "inherit",
fontSize: formData.fontSize || 24,
textColor: formData.textColor || "#000",
});
}

// Heartfelt message slide
if (formData.message) {
slides.push({
design: "message",
title: "Message^_^",
message: formData.message,
backgroundColor: "#ffffff",
fontFamily: formData.fontFamily || "inherit",
fontSize: formData.fontSize || 24,
textColor: formData.textColor || "#000",
senderName:
formData.isAnonymous === true
? "~anon"
: formData.senderName
? `~${formData.senderName}`
: "",
});
}

return slides;
};

const slides = generateSlides();

const handlePrevSlide = () =>
setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
const handleNextSlide = () =>
setActiveSlide((prev) => (prev + 1) % slides.length);

const getSlideStyle = (index) => {
const offset = index - activeSlide;
const absOffset = Math.abs(offset);
if (absOffset > 2) {
return {
opacity: 0,
transform: "translateX(200px) scale(0.5)",
pointerEvents: "none",
};
}
const translateX = offset * 9;
const rotate = offset * 3;
const scale = index === activeSlide ? 1 : 0.85;
const zIndex = slides.length - absOffset;

return {
transform: `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
zIndex,
opacity: 1,
transition: "all 0.2s ease",
};
};

return (
<div className="swiper-container">
<div className="swiper">
<div className="swiper-wrapper">
{slides.map((slide, index) => (
<div
key={index}
className={`swiper-slide ${index === activeSlide ? "active" : ""}`}
style={{
...getSlideStyle(index),
backgroundColor: slide.isCover
? "#ffffff"
: slide.backgroundColor,
fontFamily: slide.fontFamily,
width: "350px",
height: "350px",
overflow: "hidden",
}}
>
{/* Floating Hearts + Sparkles Layer */}
<div className="floating-hearts">
{[...Array(15)].map((_, i) => (
<div
key={i}
className="heart"
style={{
left: `${Math.random() * 100}%`,
animationDelay: `${Math.random() * 10}s`,
animationDuration: `${6 + Math.random() * 6}s`,
backgroundColor:
Math.random() > 0.5
? "rgba(255,105,180,0.8)"
: "rgba(255,182,193,0.8)",
}}
></div>
))}
</div>
<div className="sparkle-overlay"></div>

{/* Card Content */}
<div className={`card-preview ${slide.design}`}>
{/* Image */}
{slide.image && (
<img
src={slide.image}
alt="Card Visual"
className={`card-img ${
slide.musicUrl ? "has-spotify" : "no-spotify"
}`}
/>
)}

{/* Title */}
{slide.title && (
<h2
style={{
fontSize: slide.fontSize,
color: slide.textColor,
}}
>
{slide.title}
</h2>
)}

{/* Message */}
{slide.message && (
<>
<p
style={{
fontSize: slide.fontSize,
marginBottom: "10px",
marginTop: "10px",
color: slide.textColor,
textAlign: "center",
whiteSpace: "pre-line",
}}
>
{slide.message}
</p>
{slide.senderName && (
<div
style={{
fontStyle: "italic",
color: slide.textColor,
fontSize: "0.8em",
textAlign: "center",
marginTop: "15px",
opacity: 0.8,
}}
>
{slide.senderName}
</div>
)}
</>
)}

{/* Audio or Spotify */}
{slide.musicUrl &&
(getSpotifyEmbedUrl(slide.musicUrl) ? (
<iframe
src={getSpotifyEmbedUrl(slide.musicUrl)}
width="100%"
height="90"
frameBorder="0"
allow="encrypted-media"
title="Spotify Preview"
className="spot"
style={{ borderRadius: "12px", marginTop: "20px" }}
></iframe>
) : (
<audio
controls
style={{
width: "300px",
marginTop: "20px",
border: "2px solid var(--primary-color)",
borderRadius: "50px",
}}
>
<source src={slide.musicUrl} type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
))}
</div>
</div>
))}
</div>
</div>

<div className="swiper-navigation">
<button className="prev-btn-card swiper-btn" onClick={handlePrevSlide}>
&#8249;
</button>
<span>
{activeSlide + 1} out of {slides.length}
</span>
<button className="next-btn-card swiper-btn" onClick={handleNextSlide}>
&#8250;
</button>
</div>
</div>
);
};

export default MusicCard;
