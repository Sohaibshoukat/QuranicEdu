"use client";
import React, { useEffect, useState, useCallback } from 'react';
import './style.scss';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
    const [screenWidth, setScreenWidth] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("/");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setScreenWidth(window.outerWidth);
            const handleResize = () => {
                setScreenWidth(window.outerWidth);
            };
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const handleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuItemClick = useCallback((path) => {
        setActiveTab(path);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [isMobileMenuOpen]);

    const tabs = [
        { path: '/', label: 'Home' },
        { path: '/Course', label: 'Course' },
        { path: '/OurInstructor', label: 'Instructor' },
        { path: '/Contact', label: 'Contact' },
        { path: '/About', label: 'About Us' }
    ];

    const determineSelected = (path) => (path === activeTab ? 'selected' : '');

    return (
        <div className="Main">
            <div className="container">
                <Link href={"/"}>
                    <div className="logo">
                        <img src="../logo.webp" alt="" />
                    </div>
                </Link>
                {screenWidth > 550 ? (
                    <div className="navbar">
                        <ul>
                            {tabs.map((tab, index) => (
                                <Link href={tab.path} key={index}>
                                    <li className={determineSelected(tab.path)} onClick={() => setActiveTab(tab.path)}>
                                        {tab.label}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="MobileMenuIcon" onClick={handleMobileMenu}>
                        {!isMobileMenuOpen ? <AiOutlineMenu className='icon' /> : <AiOutlineClose className='icon' />}
                    </div>
                )}
            </div>
            {isMobileMenuOpen && (
                <div className='Mobilenavbar'>
                    <ul>
                        {tabs.map((tab, index) => (
                            <Link href={tab.path} key={index}>
                                <li className={determineSelected(tab.path)} onClick={() => handleMenuItemClick(tab.path)}>
                                    {tab.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
