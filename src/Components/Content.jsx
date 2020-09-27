import React from "react";
import Profile from "./Profile";
import Share from "./Share";

const Content = () => {
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
      <Share />
    </div>
  );
};

export default Content;
