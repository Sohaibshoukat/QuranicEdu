import React from 'react'
import "./style.scss"
import TeacherCard from '../TeacherCard';
import { Teachers } from '@/Content';


const TeacherAboutpg = () => {
    return (
      <div className='teachersAboutpg'>
      <h2>About Our Tecahers</h2>
      <div className='TeacherCards'>
        {Teachers.map((item)=>(
          <div className="CardTeacher">
            <TeacherCard item={item}/>
          </div>
        ))
        }
      </div>
      </div>
       
    )
  }

  export default TeacherAboutpg;