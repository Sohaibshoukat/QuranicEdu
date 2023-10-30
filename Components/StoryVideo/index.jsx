import React from 'react'
import "./style.scss"

const index = () => {
    return (
        <div className='StoryContainer'>
            <div className="frame">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Jf3ocFyo4t4?si=b1I7w_4ljjgeah51" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="storySection">
                <h3>Our Story</h3>
                <p>Embark on a transformative journey through the timeless art of Quranic recitation with our meticulously crafted online Tajweed classes. Unveil the profound beauty and spiritual depth of the Holy Quran as our expert instructors guide you through the intricacies of proper pronunciation, rhythm, and intonation, enhancing your understanding and connection with the sacred text. Delve into the nuances of Tajweed, allowing each verse to resonate with eloquence and resonance, thereby enriching your spiritual experience.</p>
            </div>
        </div>
    )
}

export default index