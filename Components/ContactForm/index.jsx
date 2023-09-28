"use client"

import React from 'react'
import "./style.scss"

const index = () => {
  return (
    <div className='SectionContainer'>
      <div className="Content">
        <h2>Ask A Question</h2>
        <div className="form">
          <input type="text" placeholder='Enter Your Name' required />
          <input type="email" placeholder='Enter Your Email' required />
          <textarea name="Message" id="Message" cols="30" rows="6" placeholder='Enter Your Message'></textarea>
          <button className="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default index