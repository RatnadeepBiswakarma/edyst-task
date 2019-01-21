import React from "react";
import './Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner-container">
      <div className="spinner"></div>
      </div>
      <p className="loader-text">Loading Data</p>
    </div>
  );
}
export default Loader;