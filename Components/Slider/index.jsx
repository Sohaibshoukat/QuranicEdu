'use client'

import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Testimonial } from "../../Content/index"
import { CourseOverview } from "../../Content/index"
import TestimonialCard from "../TestimonialCard"
import Card from "@/Components/Card"
import "./style.scss"

const index = ({ type }) => {
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
                {type == "Testimonial" ?
                    Testimonial?.map((item) => {
                        return (
                            <TestimonialCard item={item} />
                        );
                    }) : (CourseOverview.map((item) => (
                        <div className="card">
                            <Card title={item.Name} imageurl={item.Image} overView={item.Overview} ID={item.ID} />
                        </div>
                    ))
                    )}
            </div>
        </div>
    )
}

export default index