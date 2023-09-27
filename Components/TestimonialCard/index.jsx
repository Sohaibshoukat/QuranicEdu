import React from 'react';
import "./style.scss";

const index = ({item}) => {
  return (
    <div className="TestimonialCard">
      <p>{item.des}</p>
      <div className="profile">
        <div className="Profileimg">
          <img src="" alt="" />
        </div>
        <h4>{item.Name}</h4>
      </div>
    </div>
  )
}

export default index