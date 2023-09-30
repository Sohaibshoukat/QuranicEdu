import React from 'react'
import InstructorBanner from "@/Components/InstructorBanner"
import AllCourses from "@/Components/AllCourses"
import StoryCard from "@/Components/StoryVideo"

const page = () => {
  return (
    <>
      <InstructorBanner />
      <div className="ContainerStory">
        <h2>Our Teachers</h2>
        <p>Unlock the beauty of  Quranic recitation with our online Tajweed classes while embracing Norani Qaida,  Nazrah Qaidaz Hifzul Quran, Namaz, Six Kalmas, Tafseer and translation , Masnoon Izkar. </p>
        <AllCourses type="Teachers"/>
      </div>
      <div className="ContainerStory">
        <StoryCard />
      </div>
    </>
  )
}

export default page