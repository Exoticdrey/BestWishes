// import React, { useState } from "react";
// import "./MusicCard.css";

// const MusicCard = ({ formData }) => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   const generateSlides = () => {
//     const eventType = formData?.eventType || "birthday";
//     switch (eventType.toLowerCase()) {
//       case "birthday":
//         return [
//           {
//             design: "birthday",
//             image:
//               formData.image ||
//               "https://www.shutterstock.com/image-vector/exploding-party-popper-confetti-bright-600nw-1292838640.jpg",
//             title: `${formData.recipient || "Dear Friend"}!`,
//             message: formData.quote || "Wishing you all the best!",
//           },
//         ];
//       case "wedding":
//         return [
//           {
//             design: "wedding",
//             image: formData.image,
//             title: `Congrats ${formData.coupleName || "The Couple"}!`,
//             message:
//               formData.favoriteQuote || "Wishing you a lifetime of love!",
//           },
//         ];
//       default:
//         return [
//           {
//             design: "default",
//             image:
//               formData.image ||
//               "https://www.shutterstock.com/image-vector/exploding-party-popper-confetti-bright-600nw-1292838640.jpg",
//             title: "Your Special Card",
//             message: "Customize your preview.",
//           },
//         ];
//     }
//   };

//   const slides = generateSlides();

//   const handleSlideClick = (index) => {
//     if (!isDragging) setActiveSlide(index);
//   };

//   const handlePrevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleNextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % slides.length);
//   };

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
//               className={`swiper-slide ${
//                 index === activeSlide ? "active" : ""
//               }`}
//               style={getSlideStyle(index)}
//               style={{
//                 backgroundColor: formData.backgroundColor || "#ffffff",
//                 fontFamily: formData.fontFamily || "inherit",
//               }}
//               onClick={() => handleSlideClick(index)}
//             >
//               <div className={`card-preview ${slide.design}`}>
//                 {slide.image && <img src={slide.image} alt="" />}
//                 <h2
//                   style={{
//                     fontSize: formData.fontSize
//                       ? `${formData.fontSize}px`
//                       : "24px",
//                     color: "#fff",
//                   }}
//                 >
//                   {slide.title}
//                 </h2>
//                 <p
//                   style={{
//                     fontSize: formData.fontSize
//                       ? `${formData.fontSize - 4}px`
//                       : "16px",
//                   }}
//                 >
//                   {slide.message}
//                 </p>
//                 {formData.musicUrl && (
//                   <audio controls>
//                     <source src={formData.musicUrl} type="audio/mpeg" />
//                     Your browser does not support the audio element.
//                   </audio>
//                 )}
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

import React, { useState } from "react";
import "./MusicCard.css";

const MusicCard = ({ formData, showTemplateCover = false }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Helper to convert normal Spotify URLs to embed
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

    // Template cover as the first slide
    if (showTemplateCover) {
      slides.push({
        design: "template-cover",
        image: formData.template?.preview || "/535.png",
        title: "",
        message: "",
        isCover: true,
      });
    }

    // Main card slide (image + name + quote)
    slides.push({
      design: formData.eventType || "default",
      image: formData.imageUrl || formData.image,
      title: formData.recipient || "Your Friend",
      message: formData.quote || "",
      musicUrl: formData.musicUrl,
      backgroundColor: formData.backgroundColor || "#ffffff",
      fontFamily: formData.fontFamily || "inherit",
      fontSize: formData.fontSize || 24,
    });

    // Voice slide
    if (formData.voiceUrl) {
      slides.push({
        design: "voice",
        title: "Voice Note!💖",
        musicUrl: formData.voiceUrl,
        backgroundColor: formData.backgroundColor || "#ffffff",
        fontFamily: formData.fontFamily || "inherit",
        fontSize: formData.fontSize || 24,
      });
    }

    // Music slide (Spotify or other)
    if (formData.musicUrl) {
      slides.push({
        design: "music",
        title: "Music",
        musicUrl: formData.musicUrl,
        backgroundColor: formData.backgroundColor || "#ffffff",
        fontFamily: formData.fontFamily || "inherit",
        fontSize: formData.fontSize || 24,
      });
    }

    // Message slide
    if (formData.message) {
      slides.push({
        design: "message",
        title: "Message",
        message: formData.message,
        backgroundColor: formData.backgroundColor || "#ffffff",
        fontFamily: formData.fontFamily || "inherit",
        fontSize: formData.fontSize || 24,
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
                backgroundColor: slide.isCover ? "transparent" : slide.backgroundColor,
                fontFamily: slide.fontFamily,
                width: "350px",
                height: "350px",
              }}
            >
              <div className={`card-preview ${slide.design}`}>
                {/* Image */}
                {slide.image && <img style={{ marginTop: "60%"}} src={slide.image} alt="" />}

                {/* Title / Recipient */}
                {slide.title && (
                  <h2
                    style={{
                      fontSize: slide.fontSize,
                      color: slide.isCover ? "#fff" : "#000",
                    }}
                  >
                    {slide.title}
                  </h2>
                )}

                {/* Quote / Message */}
                {slide.message && (
                  <p style={{ fontSize: slide.fontSize - 4, marginBottom: "20px", marginTop: "10px"}}>{slide.message}</p>
                )}

                {/* Audio / Spotify */}
                {slide.musicUrl && (
                  getSpotifyEmbedUrl(slide.musicUrl) ? (
                    <iframe
                      src={getSpotifyEmbedUrl(slide.musicUrl)}
                      width="100%"
                      height="100"
                      frameBorder="0"
                      allow="encrypted-media"
                      title="Spotify Preview"
                     className="spot"></iframe>
                  ) : (
                    <audio controls style={{border: "", width: "110%", marginTop: "20px"}}>
                      <source src={slide.musicUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                   </audio>
                  )
                )}
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








// import React, { useState } from "react";
// import "./MusicCard.css";

// const MusicCard = () => {
//   const [activeSlide, setActiveSlide] = useState(2);
//   const [isDragging, setIsDragging] = useState(false);

//   const slides = [
//     {
//       image: "/A6 - 34.png",
//     },
//     {
//       image: "/A6 - 58.png",
//     },
//     {
//       image: "/A6 - 104.png",
//     },
//     {
//       image:
//         "https://github.com/user-attachments/assets/a2ca0dfd-e53f-4e79-b8b0-288847e59b9a",
//       title: "Patrick Patrikios",
//     },
//     {
//       image:
//         "https://github.com/user-attachments/assets/b286d7ff-52a1-452d-9cd9-5920c937b16e",
//       title: "Besomorph & Coopex",
//     },
//   ];

//   const handleSlideClick = (index) => {
//     if (!isDragging) {
//       setActiveSlide(index);
//     }
//   };

//   const handlePrevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const handleNextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % slides.length);
//   };

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
//       zIndex: zIndex,
//       opacity: 1,
//       transition: "all 0.2s ease",
//     };
//   };

//   return (
//     <div className="swiper-container">
//       <div className="swiper">
//         <div className="swiper-wrapper">
//           {slides.map((slide, index) => (
//             <img
//               src={slide.image}
//               alt={slide.title}
//               key={index}
//               className={`swiper-slide ${
//                 index === activeSlide ? "active" : ""
//               }`}
//               style={getSlideStyle(index)}
//               onClick={() => handleSlideClick(index)}
//             />
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
//         {activeSlide < slides.length - 1 && (
//           <button
//             className="next-btn-card swiper-btn"
//             onClick={handleNextSlide}
//           >
//             &#8250;
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MusicCard;
