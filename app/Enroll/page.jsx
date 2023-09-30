import React from 'react'
import CommonBanner from "@/Components/CommonBanner"
import EnrollForm from "@/Components/EnrollForm"


const page = () => {
  return (
    <>
    <CommonBanner Title={"Enroll Know"}/>
    <div className="ContainerStory">
        <h2>Fill This Form For Enrollment</h2>
        <EnrollForm/>
    </div>
    </>
  )
}

export default page