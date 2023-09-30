import React from "react";
import "./style.scss";
import Link from "next/link";

const Card = ({ID, title, imageurl, overView }) => {
  return (
    <div className="cardFlip">
      <div className="cardContainer">
        <div className="image">
          <img src={`./assets/Images/${imageurl}.webp`} alt="" />
        </div>

        <div className="back">
          <h5>{overView}</h5>
          <Link href={`/Course/${ID}`}>
            <button className="btnDetail">
              See Details
            </button>
          </Link>
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
