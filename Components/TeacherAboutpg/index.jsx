import React from 'react'
import "./style.scss"
import TeacherCard from '../TeacherCard';

const TeacherAboutpg = () => {
    return (
      <div className='teachersAboutpg'>
      <h2>About Our Tecahers</h2>
      <div className='TeacherCards'>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
      </div>
      </div>
       
    )
  }

  export default TeacherAboutpg;