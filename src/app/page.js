import Header from "@/app/components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import Selection from './components/Selection/Selection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0c11]">
        <Carousel/>
        <ProductsGrid/>
        <Selection types={['Новинки', 'Бестселлеры', 'Скидки']}  />
      </main>
    </>
  );
}
