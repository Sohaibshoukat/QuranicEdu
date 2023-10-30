import React from 'react'
import "./style.scss"
import FeatureCard from '../FeatureCard'
import Link from 'next/link'

const index = ({ Title }) => {
    return (
        <div className="DetailBanner">
            <div className="Innersection">
                <div className="textSection">
                    <h1>{Title}</h1>
                    <p>The most superior among you (Muslims)  are those who learn the Quran  and teach  it. </p>
                    <p>[ Bukhari  5028 ]</p>
                    <Link href="/Enroll">
                        <button className="btn">Enroll now</button>
                    </Link>
                </div>
                <div className="FeatureCard">
                    <FeatureCard buttonText={"Get A free Trial"} />
                </div>
            </div>
        </div>
    )
}

export default index