import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../ui/Footer";
import "./CreateTemplate.css";

function CreateTemplate() {
  const navigate = useNavigate();

  // Your template images (in /public/templates/)
  const templates = [
    { id: 1, preview: "/templates/template1.png", category: "Birthday" },
    { id: 2, preview: "/templates/template2.png", category: "Birthday" },
    { id: 3, preview: "/templates/template3.png", category: "Birthday" },
    { id: 4, preview: "/templates/template4.png", category: "Thank You" },
    { id: 5, preview: "/templates/template5.png", category: "Thank You" },
    { id: 6, preview: "/templates/template6.png", category: "Congratulations" },
    { id: 7, preview: "/templates/template7.png", category: "New Year Cards" },
    { id: 8, preview: "/templates/template8.png", category: "Congratulations" },
    { id: 9, preview: "/templates/template9.png", category: "Anniversary" },
    { id: 10, preview: "/templates/template10.png", category: "Birthday" },
    { id: 11, preview: "/templates/template11.png", category: "Anniversary" },
    { id: 12, preview: "/templates/template12.png", category: "Get Well Soon" },
    { id: 13, preview: "/templates/template13.png", category: "Love & Romance" },
    { id: 14, preview: "/templates/template14.png", category: "Christmas" },
    { id: 15, preview: "/templates/template15.png", category: "Christmas" },
    { id: 16, preview: "/templates/template16.png", category: "Easter Cards" },
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
