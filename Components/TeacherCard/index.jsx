import React from 'react'
import "./style.scss"

const TeacherCard = ({item}) => {

  return (
    <div className='TeacherCardContainer'>
        <img src={`../assets/Images/${item.Image}.webp`}></img>
        <h2>{item.Name}</h2>
        <p>{item.Description}</p>
    </div>
  )
}

export default TeacherCard