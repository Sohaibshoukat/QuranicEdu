import React from 'react'

const Overview = ({ Overview }) => {
  return (
    <div className="OverviewContainer">
      <div className="VideoFrame">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Lbcta_bVxP4?si=5fEKYBdK6WM5TRVm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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