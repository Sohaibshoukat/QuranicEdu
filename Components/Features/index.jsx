
"use client"
import React from "react";
import "./style.scss";
import FeatureCard from "../FeatureCard";


const Feature = () => {

  return (
    <div className="FeatureContainer">
      <div className="InnerFeatureSection">
        <div className="imageContainer">
            <img src="../assets/Images/HifzulQuran.webp"></img>
        </div>

        <div className="Features">
            <h4>Features We provide</h4>
            <FeatureCard buttonText="Browse our Case" ClickType="Courses"/>
        </div>

      </div>
    </div>
  );
};

export default Feature;
