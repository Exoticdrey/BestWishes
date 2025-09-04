import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MkHead.css";

const MkHead = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    // later, you can add your actual search logic here
  };

  return (
    <section className="mk-head">
      <div className="mk-head-title">
        <h3>Our MarketPlace</h3>

        <div className="searchbar">
          <input
            type="text"
            placeholder="Search Products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default MkHead;
