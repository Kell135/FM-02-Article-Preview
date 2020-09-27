import React from "react";

const Share = () => {
  const activeShare = () => {
    console.log("clicked");
  };
  return (
    <div className="icon-circle">
      <i className="fas fa-share" onClick={activeShare} />
    </div>
  );
};

export default Share;
