"use client"
import React from 'react'
import "./style.scss"

const index = () => {
      const phoneNumber = '+923317388258';
  const message = 'Assalam-o-Alaikum, I want to learn quran';
  const whatsappDeepLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;

  // Function to handle the button click
  const handleButtonClick = () => {
    window.open(whatsappDeepLink, '_blank');
  };
  return (
    <div className="Banner">
      <div className="Section">
        <h1>Courses</h1>
        <p>The most superior among you (Muslims)  are those who learn the Quran  and teach  it. </p>
        <p>[ bukhari  5028 ]</p>
        <button className='btn' onClick={handleButtonClick}>Start Free Trial</button>
      </div>
    </div>
  )
}

export default index