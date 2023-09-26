import React from "react";
import "./style.scss";

const Card = ({ title, imageurl }) => {
  return (
  <div className="cardContainer" style={{backgroundImage :`url(${imageurl})`}}>
    
    <div className="bar" >
      <img className="logo" src= "./logo 2.png"/>
      <span className="title">{title}</span>
    </div>

  </div>
  );
};

export default Card;
