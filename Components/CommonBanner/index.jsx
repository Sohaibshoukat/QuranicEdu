import React from 'react'
import "./style.scss"

const index = ({Title}) => {
  return (
    <div className="CommonBanner">
      <div className="Section">
        <h1>{Title}</h1>
        <p>The most superior among you (Muslims)  are those who learn the Quran  and teach  it. </p>
        <p>[ bukhari  5028 ]</p>
      </div>
    </div>
  )
}

export default index