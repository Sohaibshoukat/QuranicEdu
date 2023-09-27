"use client"
import React from 'react'
import { Links, Courses } from '@/Content'
import "./style.scss"
import Link from 'next/link'

const index = () => {
    const phoneNumber = '+923317388258';
    const message = 'Assalam-o-Alaikum, I want to learn quran';
    const whatsappDeepLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;

    // Function to handle the button click
    const handleButtonClick = () => {
        window.open(whatsappDeepLink, '_blank');
    };
    return (
        <>
            <main className='main'>
                <div className="container">
                    <Link href={"/"}>
                        <div className="logo">
                            <img src="./logo.webp" alt="" />
                        </div>
                    </Link>
                    <div className='Links'>
                        <h4>{Links.Title}</h4>
                        <ul>
                            {Links.Links.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='Links'>
                        <h4>{Courses.Title}</h4>
                        <ul>
                            {Courses.Links.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="Links">
                        <h4>Contact us</h4>
                        <ul>
                            <li className='contact'>
                                <div className="image">
                                    <img src="./assets/Images/gmail.webp" alt="" />
                                </div>
                                qarikhalid.quranicedu@gmail.com
                            </li>
                            <li className='contact'>
                                <div className="image" onClick={handleButtonClick}>
                                    <img src="./assets/Images/whatsapp.webp" alt="" />
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