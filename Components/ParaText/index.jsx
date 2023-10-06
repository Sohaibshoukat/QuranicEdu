"use client"

import React from 'react'
import "./style.scss"

const index = () => {
  const phoneNumber = '+923054672478';
  const message = 'Assalam-o-Alaikum, I want to learn quran';
  const whatsappDeepLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;

  // Function to handle the button click
  const handleButtonClick = () => {
    window.open(whatsappDeepLink, '_blank');
  };
  return (
    <div className='SectionContainer'>
        <div className="Content">
            <h2>Online  Quran  Learning</h2>
            <p>Step into  the future Quranic education with our personalized  online classes via Skype or Zoom. Our skilled teacher will engage you in live, interactive sessions, sharing their screens in real-time  Quranic learning.  Customize  your schedule , select your prefered  teacher (male/female) and unlock the joy of learning the Quran with Tajweed, Join Us and embark on a delightfull journey of Quranic mastery like never before.</p>
            <button className='btn' onClick={handleButtonClick}>WhatsApp Now</button>
        </div>
    </div>
  )
}

export default index