import React from "react";

const ShareBox = (props) => {
  return (
    <div
      className="share-box"
      style={{
        display: props.isActive,
      }}
    >
      <p className="share"> SHARE</p>
      <span className="icon">
        <i className="fab fa-facebook-square"></i>
      </span>
      <span className="icon">
        <i className="fab fa-twitter"></i>
      </span>
      <span className="icon">
        <i className="fab fa-pinterest"></i>
      </span>
    </div>
  );
};

export default ShareBox;
