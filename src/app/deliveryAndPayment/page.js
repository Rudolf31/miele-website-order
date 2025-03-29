"use client";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactFloatingPanel from '../components/ContactFloatingPanel/ContactFloatingPanel';
import Image from 'next/image';

export default function DeliveryAndPayment() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <h1 className="text-xl font-semibold text-[#F59B00] py-10">Доставка и оплата</h1>
        
        {/* Grid контейнер */}
        <div className="grid grid-cols-[auto_1fr] items-start gap-x-10 gap-y-5 mb-10">
          {/* Иконка */}
          <div className="">
            <Image 
              src="/images/deliveryAndPayment/Loader.svg" 
              alt="Loader" 
              width={48} 
              height={48}
              className=""
            />
          </div>
          
          {/* Заголовок */}
          <h3 className="info-title text-[#F59B00] items-start self-center text-lg font-medium">Lorem ipsum</h3>
          
          {/* Текст */}
          <p className="info-text col-start-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-start gap-x-10 gap-y-5 mb-10">
          {/* Иконка */}
          <div className="">
            <Image 
              src="/images/deliveryAndPayment/Truck.svg" 
              alt="Loader" 
              width={48} 
              height={48}
              className=""
            />
          </div>
          
          {/* Заголовок */}
          <h3 className="info-title text-[#F59B00] items-start self-center text-lg font-medium">Lorem ipsum</h3>
          
          {/* Текст */}
          <p className="info-text col-start-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-start gap-x-10 gap-y-5 mb-10">
          {/* Иконка */}
          <div className="">
            <Image 
              src="/images/deliveryAndPayment/Globe.svg" 
              alt="Loader" 
              width={48} 
              height={48}
              className=""
            />
          </div>
          
          {/* Заголовок */}
          <h3 className="info-title text-[#F59B00] items-start self-center text-lg font-medium">Lorem ipsum</h3>
          
          {/* Текст */}
          <p className="info-text col-start-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div className="grid grid-cols-[auto_1fr] items-start gap-x-10 gap-y-5 mb-10">
          {/* Иконка */}
          <div className="">
            <Image 
              src="/images/deliveryAndPayment/Clock.svg" 
              alt="Loader" 
              width={48} 
              height={48}
              className=""
            />
          </div>
          
          {/* Заголовок */}
          <h3 className="info-title text-[#F59B00] items-start self-center text-lg font-medium">Lorem ipsum</h3>
          
          {/* Текст */}
          <p className="info-text col-start-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
      </main>
      <Footer />
      <ContactFloatingPanel />
    </>
  );
}