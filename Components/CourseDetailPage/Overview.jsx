import React from 'react'

const Overview = ({ Overview,IframeSrc }) => {
  return (
    <div className="OverviewContainer">
      <div className="VideoFrame">
        <iframe width="560" height="315" src={IframeSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className="OverviewContent">
        <h3>Overview</h3>
        {Overview.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default Overview