import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img src="/bwlogo.png" alt="Best Wishes Logo" className="loader-logo" />
      </div>
    </div>
  );
};

export default Loader;