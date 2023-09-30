"use client"
import { CourseDetail } from '@/Content';
import  CourseDetailBanner from '@/Components/CourseDetailBanner';
import React from 'react';
import Overview from './Overview';
import Description from './Description';
import Slider from "@/Components/Slider"
import "./style.scss"

const index = ({params}) => {
    let Data=CourseDetail.filter(item=>{
        if(item.ID===params.Title){
            return item
        }
    })
    console.log()
  return (
    <>
    <CourseDetailBanner Title={Data[0].Title}/>
    <Overview Overview={Data[0].Overview}/>
    <Description Title={Data[0].Title} About={Data[0].About} Learn={Data[0].Learning}/>
    <div className="DetailContainer">
      <h2>Related Courses</h2>
      <Slider type="Courses"/>
    </div>
    </>
  )
}

export default index