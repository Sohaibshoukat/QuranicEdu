"use client"
import React, { useEffect, useState } from 'react'
import "./style.scss"
import { CourseOverview } from "@/Content/index"
import Card from "@/Components/Card"
import Link from 'next/link'

const index = () => {
    const [screenWidth, setScreenWidth] = useState(null);

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

    return (
        <div className="containerCourse">
            {CourseOverview.map((item, index) => {
                if (screenWidth > 550) {
                    if (index % 2 == 0) {
                        return (
                            <div className="CourseContain containright">
                                <div className="Card">
                                    <Card title={item.Name} imageurl={item.Image} overView={item.Overview} ID={item.ID} />
                                </div>
                                <div className="contentData">
                                    <h3>{item.Name}</h3>
                                    {item.PointDescription.map(item2 => (
                                        <p>{item2}</p>
                                    ))
                                    }
                                    <Link href={"/Enroll"}>
                                        <button className="btn">Enroll Know</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="CourseContain containleft">
                                <div className="contentData">
                                    <h3>{item.Name}</h3>
                                    {item.PointDescription.map(item2 => (
                                        <p>{item2}</p>
                                    ))
                                    }
                                    <Link href={"/Enroll"}>
                                        <button className="btn">Enroll Know</button>
                                    </Link>
                                </div>
                                <div className="Card">
                                    <Card title={item.Name} imageurl={item.Image} overView={item.Overview} />
                                </div>
                            </div>
                        )
                    }
                } else {
                    return (
                        <div className="CourseContain containright">
                            <div className="Card">
                                <Card title={item.Name} imageurl={item.Image} overView={item.Overview} />
                            </div>
                            <div className="contentData">
                                <h3>{item.Name}</h3>
                                {item.PointDescription.map(item2 => (
                                    <p>{item2}</p>
                                ))
                                }
                                <Link href={"/Enroll"}>
                                        <button className="btn">Enroll Know</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default index