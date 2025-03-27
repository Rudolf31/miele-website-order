import Header from "@/components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import Selection from '../components/Selection/Selection';
import Footer from "../components/Footer/Footer";
import ContactFloatingPanel from "../components/ContactFloatingPanel/ContactFloatingPanel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0c11]">
        <Carousel/>
        <ProductsGrid/>
        <Selection types={['Новинки', 'Бестселлеры', 'Скидки']}  />
      </main>
      <Footer />
      <ContactFloatingPanel />
    </>
  );
}
