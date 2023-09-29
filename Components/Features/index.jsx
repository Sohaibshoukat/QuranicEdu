
"use client"
import React from "react";
import "./style.scss";
import FeatureCard from "../FeatureCard";


const Feature = () => {

  return (
    <div className="FeatureContainer">
        <div className="imageContainer">
            <img src="../assets/Images/HifzulQuran.webp"></img>
        </div>

        <div className="Features">
            <h2>Features We provide</h2>
            <FeatureCard buttonText="Browse our Case"/>
        </div>
    </div>
  );
};

export default Feature;
