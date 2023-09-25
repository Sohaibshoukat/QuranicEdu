"use client";
import React, { useEffect, useState } from 'react';
import './style.scss';
import Link from 'next/link';

const NavBar = () => {

    const [screenWidth, setScreenWidth] = useState(window.outerWidth);

    const handleResize = () => {
        setScreenWidth(window.outerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="Main">
            <div className="container">
                <div className="logo">
                    <img src="./logo.webp" alt="" />
                </div>
                <div className="navbar">
                    <ul>
                        <Link href={"/"}>
                            <li>Home</li>
                        </Link>
                        <Link href={"/Course"}>
                        <li>Course</li>
                        </Link>
                        <li>Instructor</li>
                        <li>Contact</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
