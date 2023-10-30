"use client"
import React from 'react'
import { Links, Courses } from '@/Content'
import "./style.scss"
import Link from 'next/link'

const index = () => {
    const phoneNumber = '+923317388258';
    const message = 'Assalam-o-Alaikum, I want to learn quran';
    const whatsappDeepLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;
    const SecondphoneNumber = '+923054672478';
    const Secondmessage = 'Assalam-o-Alaikum, I want to learn quran';
    const SecondwhatsappDeepLink = `https://api.whatsapp.com/send/?phone=${SecondphoneNumber}&text=${Secondmessage}`;
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

    const handleSecondButtonClick = () => {
        window.open(SecondwhatsappDeepLink, '_blank');
    };
    return (
        <>
            <main className='main'>
                <div className="container">
                    <Link href={"/"}>
                        <div className="logo">
                            <img src="../logo.webp" alt="" />
                        </div>
                    </Link>
                    <div className='Links'>
                        <h4>{Links.Title}</h4>
                        <ul>
                            {Links.Links.map((item, index) => (
                                <Link href={item.Link}>
                                    <li key={index}>{item.Name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className='Links'>
                        <h4>{Courses.Title}</h4>
                        <ul>
                            {Courses.Links.map((item) => (
                                <Link href={item.Link}>
                                    <li key={index}>{item.Name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="Links">
                        <h4>Contact us</h4>
                        <ul>
                            <li key="1" className='contact'>
                                <div className="image" onClick={handleEmailButtonClick}>
                                    <img src="../assets/Images/gmail.webp" alt="" />
                                </div>
                                qarikhalid.quranicedu@gmail.com
                            </li>
                            <li key="2" className='contact'>
                                <div className="image" onClick={handleSecondButtonClick}>
                                    <img src="../assets/Images/whatsapp.webp" alt="" />
                                </div>
                                +92 305 4672478
                            </li>
                            <li key="3" className='contact'>
                                <div className="image" onClick={handleButtonClick}>
                                    <img src="../assets/Images/whatsapp.webp" alt="" />
                                </div>
                                +92 331 7388258
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <div className="footer">
                <h4>Copyright @2023  All rights are reserved</h4>
            </div>
        </>
    )
}

export default index