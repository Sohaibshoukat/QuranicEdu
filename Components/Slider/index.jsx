'use client'

import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Testimonial } from "../../Content/index"
import TestimonialCard from "../TestimonialCard"
import "./style.scss"

const index = () => {
    const carouselContainer = useRef(null);

    const Navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };
    return (
        <div className="carousel">
            <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={() => Navigation("left")}
            />
            <BsFillArrowRightCircleFill
                className="carouselRighttNav arrow"
                onClick={() => Navigation("right")}
            />
            <div className="carouselItems" ref={carouselContainer}>
                {Testimonial?.map((item) => {
                    return (
                        <TestimonialCard item={item}/>
                    );
                })}
            </div>
        </div>
    )
}

export default index