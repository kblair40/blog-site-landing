import React from "react";

const Animation = () => {
  return (
    <div className="piggy-wrapper">
      <div className="piggy-wrap">
        <div className="piggy">
          <div className="nose"></div>
          <div className="mouth"></div>
          <div className="ear"></div>
          <div className="tail">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="eye"></div>
          <div className="hole"></div>
        </div>
      </div>
      <div className="coin-wrap">
        <div className="coin">$</div>
      </div>
      <div className="legs"></div>
      <div className="legs back"></div>
    </div>
  );
};

export default Animation;
