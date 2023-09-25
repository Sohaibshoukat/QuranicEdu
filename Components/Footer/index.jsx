import React from 'react'
import { Links, Courses } from '@/Content'
import "./style.scss"

const index = () => {
    return (
        <>
        <main className='main'>
            <div className="container">
                <div className="logo">
                    <img src="./logo.webp" alt="" />
                </div>
                <div className='Links'>
                    <h4>{Links.Title}</h4>
                    <ul>
                        {Links.Links.map((item,index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='Links'>
                    <h4>{Courses.Title}</h4>
                    <ul>
                        {Courses.Links.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="Links">
                    <h4>Contact us</h4>
                    <ul>
                        <li className='contact'>
                            <div className="image">
                                <img src="./assets/Images/gmail.webp" alt="" />
                            </div>
                            qarikhalid.quranicedu@gmail.com
                        </li>
                        <li className='contact'>
                            <div className="image">
                                <img src="./assets/Images/whatsapp.webp" alt="" />
                            </div>
                            +92 331 7388258
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <div className="footer">
            <h4>Copyright @2023  All rights are reserved</h4>
        </div>
        </>
    )
}

export default index