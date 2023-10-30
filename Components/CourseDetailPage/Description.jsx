import React from 'react'
import "./style.scss"

const Description = ({ Title, About, Learn }) => {
    return (
        <div className="mainDescription">
            <div className="DescriptionContainer">
                <h4>About {Title} Course</h4>
                {About.map(item => (
                    <p>{item}</p>
                ))}
            </div>
            <div className="DescriptionContainer">
                <h4>Here you will Learn</h4>
                <ul>
                    {Learn.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Description