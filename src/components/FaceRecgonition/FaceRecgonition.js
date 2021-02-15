import React from "react";
import "./FaceRecgonition.css";

const FaceRecgonition = ({ imgUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2 img-container">
        <img src={imgUrl} alt="Rendered Image" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecgonition;
