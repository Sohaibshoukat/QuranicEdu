"use client";
import React, { useEffect, useState } from 'react';
import './style.scss';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const NavBar = () => {

    const [screenWidth, setScreenWidth] = useState(null);
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)

    useEffect(() => {
        // Check if we're running in a browser environment before using window
        if (typeof window !== 'undefined') {
            setScreenWidth(window.outerWidth);

            // Add an event listener to update screenWidth on window resize
            const handleResize = () => {
                setScreenWidth(window.outerWidth);
            };

            window.addEventListener('resize', handleResize);

            // Clean up the event listener when the component unmounts
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const toggleMobileMenu = () => {
        setisMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <div className="Main">
            <div className="container">
                <Link href={"/"}>
                    <div className="logo">
                        <img src="../logo.webp" alt="" />
                    </div>
                </Link>
                {screenWidth > 550 ?
                    (
                        <div className="navbar">
                            <ul>
                                <Link href={"/"}>
                                    <li>Home</li>
                                </Link>
                                <Link href={"/Course"}>
                                    <li>Course</li>
                                </Link>
                                <li>Instructor</li>
                                <Link href={"/Contact"}>
                                    <li>Contact</li>
                                </Link>
                                <Link href={"/About"}>
                                    <li>About Us</li>
                                </Link>
                            </ul>
                        </div>
                    )
                    : (
                        <>
                            <div className="MobileMenuIcon" onClick={toggleMobileMenu}>
                                {!isMobileMenuOpen ? <AiOutlineMenu className='icon' /> : <AiOutlineClose className='icon' />}
                            </div>
                        </>
                    )
                }
            </div>
            {isMobileMenuOpen &&
                <div className='Mobilenavbar'>
                    <ul>
                        <Link href={"/"}>
                            <li>Home</li>
                        </Link>
                        <Link href={"/Course"}>
                            <li>Course</li>
                        </Link>
                        <li>Instructor</li>
                        <Link href={"/Contact"}>
                            <li>Contact</li>
                        </Link>
                        <Link href={"/About"}>
                            <li>About Us</li>
                        </Link>
                    </ul>
                </div>
            }
        </div>
    );
};

export default NavBar;
