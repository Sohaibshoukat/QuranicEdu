import React from "react";
import "./style.scss";

const Card = ({ title, imageurl, overView }) => {
  return (
    <div className="cardFlip">
      <div className="cardContainer">
        <div className="image">
          <img src={`./assets/Images/${imageurl}.webp`} alt="" />
        </div>

        <div className="back">
          <p>{overView}</p>
        </div>

        <div className="bar">
          <div className="Logoimg">
            <img className="logo" src="./logo 2.png" />
          </div>
          <h4 className="title">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
