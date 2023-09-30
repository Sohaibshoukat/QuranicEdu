import Banner from "@/Components/Banner";
import CardContainer from "@/Components/cardCContainer";
import ParaText from "@/Components/ParaText"
import StudentBanner from "@/Components/StudentBanner";
import StoryCard from "@/Components/StoryVideo";
import Slider from "@/Components/Slider";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <CardContainer />
      <ParaText />
      <div className="ContainerStory">
        <h2>Our Happy Students Around the World!</h2>
        <Slider type="Testimonial"/>
      </div>
      <StudentBanner />
      <div className="ContainerStory">
        <StoryCard />
      </div>
    </main>
  )
}
