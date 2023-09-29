import React from 'react'
import CommonBanner from "@/Components/CommonBanner"
import AboutUsText from '@/Components/AboutUsText'
import Feature from '@/Components/Features'
import TeacherAboutpg from '@/Components/TeacherAboutpg'


const page = () => {
  return (
    <>
      <CommonBanner Title="About Us" />
      <AboutUsText/>
      <Feature/>
      <TeacherAboutpg/>
    </>
  )
}

export default page
