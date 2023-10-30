"use client"
import React from "react";
import "./style.scss";
import Link from "next/link";
import { BsCalendar2Week } from "react-icons/bs";
import { color } from "@chakra-ui/react";

const FeatureCard = ({ buttonText, ClickType }) => {
    const phoneNumber = '+923054672478';
    const message = 'Assalam-o-Alaikum, I want to learn quran';
    const whatsappDeepLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;
    const handleButtonClick = () => {
        window.open(whatsappDeepLink, '_blank');
    };
    return (
        <div className="FeatureCardcontainer">

            <div className="row">
                <img src="../assets/Images/free.webp"></img>
                <p>3-days Free Trial</p>
            </div>

            <div className="row">
                <img src="../assets/Images/male.webp"></img>
                <p>Male and Female tutors</p>
            </div>

            <div className="row">
                <img src="../assets/Images/duration.webp"></img>
                <p>30-minutes duration</p>
            </div>

            <div className="row">
                <img src="../assets/Images/age.webp"></img>
                <p>No age limit</p>
            </div>
            <div className="row">
                <img src="../assets/Images/duration.webp"></img>
                <p>Skype and Zoom Lecture</p>
            </div>
            

            <div class="white-line"></div>

            {ClickType == "Courses" ?
                (
                    <Link href={"/Course"}>
                        <div className="Cardbtn">
                            <button className="Featurebtn">{buttonText}</button>
                        </div>
                    </Link>
                ) : (
                    <div className="Cardbtn" onClick={handleButtonClick}>
                        <button className="Featurebtn">{buttonText}</button>
                    </div>
                )}
        </div>
    );
};

export default FeatureCard;
