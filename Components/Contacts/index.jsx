"use client"
import React from 'react';
import "./style.scss";

const index = () => {
    const phoneNumber = '+923317388258';
    const message = 'Assalam-o-Alaikum, I want to learn quran';
    const whatsappDeepLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;
    const emailAddress = 'qarikhalid.quranicedu@gmail.com';
    const emailSubject = 'Inquiry about Quran courses';
    const emailBody = 'Assalam-o-Alaikum, I am interested in learning Quranic courses.';

    // Function to handle the email button click
    const handleEmailButtonClick = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    };

    // Function to handle the button click
    const handleButtonClick = () => {
        window.open(whatsappDeepLink, '_blank');
    };
  return (
    <div className="ContactSection">
        <div className="ContactContainer">
            <div className="Contactimage" onClick={handleButtonClick}>
                <img src="./assets/Images/whatsapp.webp" alt="" />
            </div>
            <h4>Text us on Whatsapp</h4>
            <p>+92 331 7388258</p>
        </div>
        <div className="ContactContainer">
            <div className="Contactimage" onClick={handleEmailButtonClick}>
                <img src="./assets/Images/gmail.webp" alt="" />
            </div>
            <h4>Send Us An Email</h4>
            <p>qarikhalid.quranicedu@gmail.com</p>
        </div>
    </div>
  )
}

export default index