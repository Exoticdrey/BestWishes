import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img src="/images/logo.svg" alt="Best Wishes Logo" className="loader-logo" />
      </div>
    </div>
  );
};

export default Loader;