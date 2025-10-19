import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../ui/Footer";
import "./CreateTemplate.css";

function CreateTemplate() {
  const navigate = useNavigate();

  // Your template images (in /public/templates/)
  const templates = [
    { id: 1, preview: "/templates/christmas1.jpeg", category: "Christmas" },
    { id: 2, preview: "/templates/christmas2.jpeg", category: "Christmas" },
    { id: 3, preview: "/templates/christmas3.jpeg", category: "Christmas" },
    { id: 4, preview: "/templates/christmas4.jpeg", category: "Christmas" },
    { id: 5, preview: "/templates/christmas5.jpeg", category: "Christmas" },
    { id: 6, preview: "/templates/boyfriend1.jpeg", category: "Boyfriend's Day" },
    { id: 7, preview: "/templates/boyfriend2.jpeg", category: "Boyfriend's Day" },
    { id: 8, preview: "/templates/boyfriend3.jpeg", category: "Boyfriend's Day" },
    { id: 9, preview: "/templates/boyfriend4.jpeg", category: "Boyfriend's Day" },
    { id: 10, preview: "/templates/boyfriend5.jpeg", category: "Boyfriend's Day" },
    { id: 11, preview: "/templates/easter1.jpeg", category: "Easter Cards" },
    { id: 12, preview: "/templates/easter2.jpeg", category: "Easter Cards" },
    { id: 13, preview: "/templates/easter3.jpeg", category: "Easter Cards" },
    { id: 14, preview: "/templates/easter4.jpeg", category: "Easter Cards" },
    { id: 15, preview: "/templates/easter5.jpeg", category: "Easter Cards" },
    { id: 16, preview: "/templates/situationship1.jpeg", category: "Situationships" },
    { id: 17, preview: "/templates/situationship2.jpeg", category: "Situationships" },
    { id: 18, preview: "/templates/situationship3.jpeg", category: "Situationships" },
    { id: 19, preview: "/templates/situationship4.jpeg", category: "Situationships" },
    { id: 20, preview: "/templates/anniversary1.jpeg", category: "Anniversary" },
    { id: 21, preview: "/templates/anniversary2.jpeg", category: "Anniversary" },
    { id: 22, preview: "/templates/anniversary3.jpeg", category: "Anniversary" },
    { id: 23, preview: "/templates/anniversary4.jpeg", category: "Anniversary" },
    { id: 24, preview: "/templates/anniversary5.jpeg", category: "Anniversary" },
    { id: 25, preview: "/templates/anniversary6.jpeg", category: "Anniversary" },
    { id: 26, preview: "/templates/birthday1.jpeg", category: "Birthday" },
    { id: 27, preview: "/templates/birthday2.jpeg", category: "Birthday" },
    { id: 28, preview: "/templates/birthday3.jpeg", category: "Birthday" },
    { id: 29, preview: "/templates/birthday4.jpeg", category: "Birthday" },
    { id: 30, preview: "/templates/birthday5.jpeg", category: "Birthday" },
    { id: 31, preview: "/templates/birthday6.jpeg", category: "Birthday" },
    
    { id: 32, preview: "/templates/postpartum1.jpeg", category: "Postpartum" },
    { id: 33, preview: "/templates/postpartum2.jpeg", category: "Postpartum" },
    { id: 34, preview: "/templates/postpartum3.jpeg", category: "Postpartum" },
    { id: 35, preview: "/templates/postpartum4.jpeg", category: "Postpartum" },
    { id: 36, preview: "/templates/postpartum5.jpeg", category: "Postpartum" },
    { id: 37, preview: "/templates/congrats1.jpeg", category: "Congratulations" },
    { id: 38, preview: "/templates/congrats2.jpeg", category: "Congratulations" },
    { id: 39, preview: "/templates/congrats3.jpeg", category: "Congratulations" },
    { id: 40, preview: "/templates/congrats4.jpeg", category: "Congratulations" },
    { id: 41, preview: "/templates/congrats5.jpeg", category: "Congratulations" },
    { id: 42, preview: "/templates/easter6.jpeg", category: "Easter Cards" },
    { id: 43, preview: "/templates/love1.jpeg", category: "Love & Romance" },
    { id: 44, preview: "/templates/love2.jpeg", category: "Love & Romance" },
    { id: 45, preview: "/templates/love3.jpeg", category: "Love & Romance" },
    { id: 46, preview: "/templates/love4.jpeg", category: "Love & Romance" },
    { id: 47, preview: "/templates/love5.jpeg", category: "Love & Romance" },
    { id: 48, preview: "/templates/thanks1.jpeg", category: "Thank You" },
    { id: 49, preview: "/templates/thanks2.jpeg", category: "Thank You" },
    { id: 50, preview: "/templates/thanks3.jpeg", category: "Thank You" },
    { id: 51, preview: "/templates/thanks4.jpeg", category: "Thank You" },
    { id: 52, preview: "/templates/thanks5.jpeg", category: "Thank You" },
    { id: 53, preview: "/templates/thanks6.jpeg", category: "Thank You" },
    { id: 54, preview: "/templates/well1.jpeg", category: "Get Well Soon" },
    { id: 55, preview: "/templates/well2.jpeg", category: "Get Well Soon" },
    { id: 56, preview: "/templates/well3.jpeg", category: "Get Well Soon" },
    { id: 57, preview: "/templates/well4.jpeg", category: "Get Well Soon" },
    { id: 58, preview: "/templates/well5.jpeg", category: "Get Well Soon" },
    { id: 59, preview: "/templates/well6.jpeg", category: "Get Well Soon" },
    { id: 60, preview: "/templates/year1.jpeg", category: "New Year Cards" },
    { id: 61, preview: "/templates/year2.jpeg", category: "New Year Cards" },
    { id: 62, preview: "/templates/year3.jpeg", category: "New Year Cards" },
    { id: 63, preview: "/templates/year4.jpeg", category: "New Year Cards" },
    { id: 64, preview: "/templates/year5.jpeg", category: "New Year Cards" },
    { id: 65, preview: "/templates/year6.jpeg", category: "New Year Cards" },
    { id: 66, preview: "/templates/occasion1.jpeg", category: "Special Occasion" },
    { id: 67, preview: "/templates/occasion2.jpeg", category: "Special Occasion" },
    { id: 68, preview: "/templates/occasion3.jpeg", category: "Special Occasion" },
  ];

  const categories = [
    "All",
    "Birthday",
    "Thank You",
    "Congratulations",
    "Get Well Soon",
    "Love & Romance",
    "New Year Cards",
    "Anniversary",
    "Christmas",
    "Easter Cards",
    "Special Occasion",
    "Situationships",
    "Boyfriend's Day",
    "Postpartum",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const handleSelect = (template) => {
    navigate("/create-card", { state: { template } });
  };

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <>
      <Navbar />

      <div className="create-template">
        <div className="create-template-head">
          <h3>Personalize Your Perfect Card</h3>
          <p>
            Express your emotions through personalized cards with images, <br />{" "}
            music and a lot more features to create a special experience.
          </p>
        </div>

        {/* Category Carousel */}
        <div className="category-carousel">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Templates */}
        <div className="templates">
          {filteredTemplates.map((t) => (
            <div
              key={t.id}
              className="template-card"
              onClick={() => handleSelect(t)}
            >
              <img src={t.preview} alt={t.category} className="template-img" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CreateTemplate;
