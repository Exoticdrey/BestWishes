// import { useState } from "react";
// import "./Features.css";

// const Features = () => {
//   const [activeFeature, setActiveFeature] = useState(null);

//   const defaultCard = {
//     card: "/images/default-center-card.png",
//     title: "",
//     text: "",
//   };

//   const features = [
//     {
//       id: "gift",
//       icon: "/images/feature-gift.png",
//       card: "/images/card-gift.png",
//       title: "Gift Items",
//       text: "Send real or digital gifts along with your message.",
//     },
//     {
//       id: "music",
//       icon: "/images/feature-music.png",
//       card: "/images/card-music.png",
//       title: "Music",
//       text: "Add songs that match the mood and moment.",
//     },
//     {
//       id: "images",
//       icon: "/images/feature-images.png",
//       card: "/images/card-images.png",
//       title: "Images",
//       text: "Upload photos and memories to personalize your greeting.",
//     },
//     {
//       id: "effects",
//       icon: "/images/feature-effects.png",
//       card: "/images/card-effects.png",
//       title: "Effects",
//       text: "Add visual effects to make your card feel magical.",
//     },
//     {
//       id: "colors",
//       icon: "/images/feature-colors.png",
//       card: "/images/card-colors.png",
//       title: "Colors",
//       text: "Pick color themes to match the mood and aesthetic.",
//     },
//     {
//       id: "fonts",
//       icon: "/images/feature-fonts.png",
//       card: "/images/card-fonts.png",
//       title: "Fonts",
//       text: "Choose font styles that bring emotion to life.",
//     },
//     {
//       id: "stickers",
//       icon: "/images/feature-stickers.png",
//       card: "/images/card-stickers.png",
//       title: "Stickers",
//       text: "Add cute or aesthetic stickers to your card.",
//     },
//     {
//       id: "record",
//       icon: "/images/feature-record.png",
//       card: "/images/card-record.png",
//       title: "Voice Memo",
//       text: "Record heartfelt voice messages straight from your heart.",
//     },
//   ];

//   return (
//     <section className="features-container">
//       <div className="features-header">
//         <p className="features-title">
//           Check our Gifting <u>Categories</u>
//         </p>
//         <p className="sub-features-title">
//           Explore <span className="blue-highlight">Features</span> that make your <br />
//           greetings more personal and <span className="blue-highlight">your gifts</span> meaningful.
//         </p>
//       </div>

//       <div className="features-interactive">

//         <div className="features-icons">
//           {features.map((f) => (
//             <div
//               key={f.id}
//               className={`feature-icon ${activeFeature === f.id ? "active" : ""}`}
//               onMouseEnter={() => setActiveFeature(f.id)}
//               onMouseLeave={() => setActiveFeature(null)}
//               onClick={() => setActiveFeature(activeFeature === f.id ? null : f.id)}
//             >
//               <img src={f.icon} alt={f.title} />
//             </div>
//           ))}
//         </div>

//         <div className={`center-card-container ${activeFeature ? "glow" : ""}`}>
//           <img
//             src={(activeFeature ? features.find((x) => x.id === activeFeature) : defaultCard).card}
//             className="center-card-img"
//             alt="Feature Preview"
//           />

//           {activeFeature && (
//             <div className="center-card-text">
//               <h3>{features.find((x) => x.id === activeFeature).title}</h3>
//               <p>{features.find((x) => x.id === activeFeature).text}</p>
//             </div>
//           )}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Features;


// import { useState } from "react";
// import "./Features.css";

// const Features = () => {
//   const [activeFeature, setActiveFeature] = useState(null);

//   const defaultCard = {
//     card: "/images/default-center-card.png",
//     title: "",
//     text: "",
//   };

//   const features = [
//     { id: "gift", icon: "/images/feature-gift.png", card: "/images/card-gift.png", title: "Gift Items", text: "Send real or digital gifts along with your message." },
//     { id: "music", icon: "/images/feature-music.png", card: "/images/card-music.png", title: "Music", text: "Add songs that match the mood and moment." },
//     { id: "images", icon: "/images/feature-images.png", card: "/images/card-images.png", title: "Images", text: "Upload photos and memories to personalize your greeting." },
//     { id: "effects", icon: "/images/feature-effects.png", card: "/images/card-effects.png", title: "Effects", text: "Add visual effects to make your card feel magical." },
//     { id: "colors", icon: "/images/feature-colors.png", card: "/images/card-colors.png", title: "Colors", text: "Pick color themes to match the mood and aesthetic." },
//     { id: "fonts", icon: "/images/feature-fonts.png", card: "/images/card-fonts.png", title: "Fonts", text: "Choose font styles that bring emotion to life." },
//     { id: "stickers", icon: "/images/feature-stickers.png", card: "/images/card-stickers.png", title: "Stickers", text: "Add cute or aesthetic stickers to your card." },
//     { id: "record", icon: "/images/feature-record.png", card: "/images/card-record.png", title: "Voice Memo", text: "Record heartfelt voice messages straight from your heart." },
//   ];

//   const current = activeFeature
//     ? features.find((x) => x.id === activeFeature)
//     : defaultCard;

//   return (
//     <section className="features-container">
//       <div className="features-header">
//         <p className="features-title">
//           Check our Gifting <u>Categories</u>
//         </p>
//         <p className="sub-features-title">
//           Explore <span className="blue-highlight">Features</span> that make your <br />
//           greetings more personal and <span className="blue-highlight">your gifts</span> meaningful.
//         </p>
//       </div>

//       <div className="features-interactive">

//         <div className="features-icons">
//           {features.map((f) => (
//             <div
//               key={f.id}
//               className={`feature-icon ${activeFeature === f.id ? "active" : ""}`}
//               onMouseEnter={() => setActiveFeature(f.id)}
//               onMouseLeave={() => setActiveFeature(null)}
//               onClick={() => setActiveFeature(activeFeature === f.id ? null : f.id)}
//             >
//               <img src={f.icon} alt={f.title} />
//             </div>
//           ))}
//         </div>

//        {/* <div className={`center-card-container ${activeFeature ? "glow" : ""}`}>
//   <div className={`card-inner ${activeFeature ? "active-card" : "default-card"}`}>
    
//     <img
//       src={current.card}
//       className="card-icon"
//       alt="Feature Preview"
//     />

//     {activeFeature && (
//       <>
//         <h3 className="card-title">{current.title}</h3>
//         <p className="card-text">{current.text}</p>
//       </>
//     )}
//   </div>
// </div> */}


// <div className={`center-card-container ${activeFeature ? "glow" : ""}`}>

//   {!activeFeature && (
//     <div className="default-card">
//       <img src={defaultCard.card} className="default-card-img" alt="Default Card" />
//     </div>
//   )}

//   {activeFeature && (
//     <div className="active-card">
//       <img 
//         src={features.find((x) => x.id === activeFeature).card} 
//         className="card-icon"
//         alt="Feature Card"
//       />
//       <h3 className="card-title">{features.find((x) => x.id === activeFeature).title}</h3>
//       <p className="card-text">{features.find((x) => x.id === activeFeature).text}</p>
//     </div>
//   )}

// </div>



//       </div>
//     </section>
//   );
// };

// export default Features;





// import { useState } from "react";
// import "./Features.css";

// const Features = () => {
//   const [activeFeature, setActiveFeature] = useState(null);

//   const defaultCard = {
//     card: "/images/default-center-card.png",
//     title: "",
//     text: "",
//   };

//   const features = [
//     { id: "gift", icon: "/images/feature-gift.png", card: "/images/card-gift.png", title: "Gift Items", text: "Send real or digital gifts along with your message." },
//     { id: "music", icon: "/images/feature-music.png", card: "/images/card-music.png", title: "Music", text: "Add songs that match the mood and moment." },
//     { id: "images", icon: "/images/feature-images.png", card: "/images/card-images.png", title: "Images", text: "Upload photos and memories to personalize your greeting." },
//     { id: "effects", icon: "/images/feature-effects.png", card: "/images/card-effects.png", title: "Effects", text: "Add visual effects to make your card feel magical." },
//     { id: "colors", icon: "/images/feature-colors.png", card: "/images/card-colors.png", title: "Colors", text: "Pick color themes to match the mood and aesthetic." },
//     { id: "fonts", icon: "/images/feature-fonts.png", card: "/images/card-fonts.png", title: "Fonts", text: "Choose font styles that bring emotion to life." },
//     { id: "stickers", icon: "/images/feature-stickers.png", card: "/images/card-stickers.png", title: "Stickers", text: "Add cute or aesthetic stickers to your card." },
//     { id: "record", icon: "/images/feature-record.png", card: "/images/card-record.png", title: "Voice Memo", text: "Record heartfelt voice messages straight from your heart." },
//   ];

//   const current = activeFeature
//     ? features.find((x) => x.id === activeFeature)
//     : defaultCard;

//   return (
//     <section className="features-container">
//       <div className="features-header">
//         <p className="features-title">
//           Check our Gifting <u>Categories</u>
//         </p>
//         <p className="sub-features-title">
//           Explore <span className="blue-highlight">Features</span> that make your <br />
//           greetings more personal and <span className="blue-highlight">your gifts</span> meaningful.
//         </p>
//       </div>

//       <div className="features-interactive">

//         {/* ✅ Circular Icons Wrapper */}
//         <div className="icons-circle">
//           {features.map((f, index) => (
//             <div
//               key={f.id}
//               className={`feature-icon ${activeFeature === f.id ? "active" : ""}`}
//               style={{ "--i": index }}
//               onMouseEnter={() => setActiveFeature(f.id)}
//               onMouseLeave={() => setActiveFeature(null)}
//               onClick={() => setActiveFeature(activeFeature === f.id ? null : f.id)}
//             >
//               <img src={f.icon} alt={f.title} />
//             </div>
//           ))}
//         </div>

//         {/* ✅ Center Card */}
//         <div className={`center-card-container ${activeFeature ? "glow" : ""}`}>

//           {!activeFeature && (
//             <div className="default-card">
//               <img src={defaultCard.card} className="default-card-img" alt="Default Card" />
//             </div>
//           )}

//           {activeFeature && (
//             <div className="active-card">
//               <img 
//                 src={current.card}
//                 className="card-icon"
//                 alt="Feature Card"
//               />
//               <h3 className="card-title">{current.title}</h3>
//               <p className="card-text">{current.text}</p>
//             </div>
//           )}

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Features;








import { useState } from "react";
import "./Features.css";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const defaultCard = {
    card: "/images/default-center-card.png",
    title: "",
    text: "",
  };

  const features = [
    { id: "gift", icon: "/images/feature-gift.png", card: "/images/card-gift.png", title: "Gift Items", text: "Send real or digital gifts along with your message." },
    { id: "music", icon: "/images/feature-music.png", card: "/images/card-music.png", title: "Music", text: "Add songs that match the mood and moment." },
    { id: "images", icon: "/images/feature-images.png", card: "/images/card-images.png", title: "Images", text: "Upload photos and memories to personalize your greeting." },
    { id: "effects", icon: "/images/feature-effects.png", card: "/images/card-effects.png", title: "Effects", text: "Add visual effects to make your card feel magical." },
    { id: "colors", icon: "/images/feature-colors.png", card: "/images/card-colors.png", title: "Colors", text: "Pick color themes to match the mood and aesthetic." },
    { id: "fonts", icon: "/images/feature-fonts.png", card: "/images/card-fonts.png", title: "Fonts", text: "Choose font styles that bring emotion to life." },
    { id: "stickers", icon: "/images/feature-stickers.png", card: "/images/card-stickers.png", title: "Stickers", text: "Add cute or aesthetic stickers to your card." },
    { id: "record", icon: "/images/feature-record.png", card: "/images/card-record.png", title: "Voice Memo", text: "Record heartfelt voice messages straight from your heart." },
  ];

  const current = activeFeature
    ? features.find((x) => x.id === activeFeature)
    : defaultCard;

  const isDesktop = () => window.innerWidth > 768;
  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;


  return (
    <section className="features-container">
      <div className="features-header">
        <h3 className="features-title">
          Our Features
        </h3>
        <p className="sub-features-title">
          Explore Features that make your greetings more
personal and your gifts meaningful
        </p>
      </div>

      <div className="features-interactive">

        {/* Circular Icons */}
        <div className="icons-circle">
          {features.map((f, index) => (
            <div
              key={f.id}
              className={`feature-icon ${activeFeature === f.id ? "active" : ""}`}
              style={{ "--i": index }}
              
              
              // onMouseEnter={() => {
              //   if (isDesktop()) setActiveFeature(f.id);
              // }}
              // onMouseLeave={() => {
              //   if (isDesktop()) setActiveFeature(null);
              // }}

              // Tap toggle works everywhere
              // onClick={() =>
              //   setActiveFeature(activeFeature === f.id ? null : f.id)
              // }

              onMouseEnter={!isTouch ? () => setActiveFeature(f.id) : undefined}
onMouseLeave={!isTouch ? () => setActiveFeature(null) : undefined}
onClick={() => setActiveFeature(activeFeature === f.id ? null : f.id)}


            >
              <img src={f.icon} alt={f.title} />
            </div>
          ))}
        </div>

        {/* ✅ Center Card */}
        <div className={`center-card-container ${activeFeature ? "glow" : ""}`}>

          {!activeFeature && (
            <div className="default-card">
              <img src={defaultCard.card} className="default-card-img" alt="Default Card" />
            </div>
          )}

          {activeFeature && (
            <div className="active-card">
              <img 
                src={current.card}
                className="card-icon"
                alt="Feature Card"
              />
              <h3 className="card-title">{current.title}</h3>
              <p className="card-text">{current.text}</p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Features;
