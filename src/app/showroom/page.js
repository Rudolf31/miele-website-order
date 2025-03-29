import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactFloatingPanel from '../components/ContactFloatingPanel/ContactFloatingPanel';
import Map from '../components/Map/Map';
import SliderGallery from '../components/SliderGallery/SliderGallery';

export default function ShowroomPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto px-4 font-medium flex-grow pb-10">
        <h1 className="text-xl font-semibold text-[#F59B00] py-20">Шоу-рум Miele в Москве</h1>
        <p>Ждём вас в Шоу-руме Miele по адресу:</p>
        <p className='mb-5'>ул. Пушкинская, д. 1</p>
        <p className='mb-10'>Время работы: с 10:00 до 19:00</p>
        <Map />
        <h3 className='text-[#F59B00] text-lg font-medium mb-2 mt-10 text-center'>Галерея</h3>
        <SliderGallery/>
      </main>
      <Footer />
      <ContactFloatingPanel />
    </div>
  );
}