
"use client"
import React from "react";
import Card from "../Card";
import "./style.scss";
import { CourseOverview} from "@/Content/index"

const CardContainer = () => {

  return (
    <div className="CoursesSection">
      <div className="Title">
        <h2>Online  Quran  Learning</h2>
        <p>Unlock the beauty of  Quranic recitation with our online Tajweed classes while embracing Norani Qaida,  Nazrah Qaidaz Hifzul Quran, Namaz, Six Kalmas, Tafseer and translation , Masnoon Izkar. </p>
      </div>
      <div className="CourseContainer">
      {CourseOverview.map((item)=>(
        <Card title={item.Name} imageurl={item.Image}/>
      ))}
      </div>
    </div>
  );
};

export default CardContainer;
