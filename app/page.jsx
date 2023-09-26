import Banner from "@/Components/Banner";
import Card from "@/Components/Card";
import CardContainer from "@/Components/cardCContainer";
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner/>
    <CardContainer/>
      <div style={{height:"100vh"}}></div>
      
    </main>
  )
}
