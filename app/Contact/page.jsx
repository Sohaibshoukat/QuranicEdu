import React from 'react'
import CommonBanner from "@/Components/CommonBanner"
import Contacts from "@/Components/Contacts"
import ContactForm from "@/Components/ContactForm"

const page = () => {
    return (
        <>
            <CommonBanner Title="Contact Us" />
            <div className="ContainerStory">
                <h2>Get in Touch</h2>
                <p>Unlock the beauty of  Quranic recitation with our online Tajweed classes while embracing Norani Qaida,  Nazrah Qaidaz Hifzul Quran, Namaz, Six Kalmas, Tafseer and translation , Masnoon Izkar. </p>
                <Contacts />
            </div>
            <ContactForm />
            <div className="ContainerStory">
                <h2>Hadith</h2>
                <div className="TextSection">
                    <h5>Hazrat Muhammad ( P.B.U.H ) Said:</h5>
                    <p className='m-0'>“He who cheats is not of Us.  Deceitfulness and fraud are things  that lead one to Hell. “</p>
                </div>
            </div>
        </>
    )
}

export default page