"use client"
import { CourseDetail } from '@/Content';
import  CourseDetailBanner from '@/Components/CourseDetailBanner';
import React from 'react';
import Overview from './Overview';
import Description from './Description';

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
    <Overview/>
    <Description Title={Data[0].Title} About={Data[0].About} Learn={Data[0].Learning}/>
    </>
  )
}

export default index