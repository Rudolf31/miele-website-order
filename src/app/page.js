import Header from "@/app/components/Header/Header";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0c11]">
        <Carousel/>
      </main>
      
    </>
  );
}
