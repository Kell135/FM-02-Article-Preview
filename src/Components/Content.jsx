import React, { useState } from "react";
import Profile from "./Profile";
import ShareBox from "./ShareBox";

const Content = () => {
  const [isHidden, setHidden] = useState(true);

  const handleClick = () => {
    if (isHidden === true) {
      setHidden(false);
    } else if (isHidden === false) {
      setHidden(true);
    }
    console.log(isHidden);
  };

  return (
    <div className="content">
      <h1 className="title">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className="message">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <Profile />
      <div
        className="icon-circle"
        style={{
          backgroundColor: isHidden
            ? "hsl(210, 46%, 95%)"
            : "hsl(217, 19%, 35%)",
        }}
      >
        <i
          className="fas fa-share"
          onClick={handleClick}
          style={{
            color: isHidden ? "non" : "white",
          }}
        />
      </div>
      <ShareBox isActive={isHidden ? "none" : "flex"} />
    </div>
  );
};

export default Content;
