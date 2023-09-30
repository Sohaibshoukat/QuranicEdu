import React from "react";
import "./style.scss";

const FeatureCard = ({buttonText}) => {
  return (
<div className="FeatureCardcontainer">

    <div className="row">
        <img src="../assets/Images/free.png"></img>
        <p>3-days Free Trial</p>
    </div>

    <div className="row">
        <img src="../assets/Images/male.png"></img>
        <p>Male and Female tutors</p>
    </div>

    <div className="row">
        <img src="../assets/Images/duration.png"></img>
        <p>30-minutes duration</p>
    </div>

    <div className="row">
        <img src="../assets/Images/age.png"></img>
        <p>No age limit</p>
    </div>

    <div class="white-line"></div>

    <div className="Cardbtn"><button className="Featurebtn">{buttonText}</button></div>
</div>
  );
};

export default FeatureCard;
