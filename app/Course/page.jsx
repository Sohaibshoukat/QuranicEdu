import React from 'react'
import CourseBanner from "@/Components/CourseBanner"
import AllCourses from "@/Components/AllCourses";

const Course = () => {
  return (
    <>
      <CourseBanner />
      <div className="ContainerStory">
        <h2>Online  Quran  Learning</h2>
        <p>Unlock the beauty of  Quranic recitation with our online Tajweed classes while embracing Norani Qaida,  Nazrah Quran, Hifzul Quran, Namaz, Six Kalmas, Tafseer and translation , Masnoon Izkar. </p>
        <AllCourses/>
      </div>
    </>
  )
}

export default Course