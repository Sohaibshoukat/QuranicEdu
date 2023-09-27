import React from 'react'
import "./style.scss"

const index = () => {
  const Data=[
    {
      Title:"Students",
      Count:"10000+"
    },
    {
      Title:"Courses",
      Count:"6+"
    },
    {
      Title:"Satisfcation",
      Count:"100%"
    }
  ]
  return (
    <div className='StudnetContainer'>
        <div className="Content">
            <h2>Bringing you a positive and awakening One-on-One Learning Environment</h2>
            <div className="Data">
              {Data.map(item=>(
                <div className="Set">
                  <h3>{item.Count}</h3>
                  <h5>{item.Title}</h5>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default index