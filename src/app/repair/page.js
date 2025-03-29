"use client";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactFloatingPanel from '../components/ContactFloatingPanel/ContactFloatingPanel';


export default function DeliveryAndPayment() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 font-medium">
        <h1 className="text-xl font-semibold text-[#F59B00] py-20">Ремонт техники Miele</h1>
        
        <div className="grid grid-cols-1 gap-x-10 gap-y-5 mb-10">

          <h3 className="info-title text-[#F59B00] text-lg font-medium">Lorem ipsum</h3>

          <p className="info-text ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-5 mb-10">

          <h3 className="info-title text-[#F59B00] text-lg font-medium">Lorem ipsum</h3>

          <p className="info-text ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div className='mb-20'>
            <h3 className="info-title text-[#F59B00] text-lg font-medium mb-5">Lorem ipsum</h3>
            <div className="border-2 rounded-md border-[#F59B00] p-5 max-w-56">
                <p className='mb-5'>Lorem ipsum dolor sit amet</p>
                <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <p className='mb-2.5 text-xs'>example@mail.ru</p>
                <p className='text-xs'>+0(000)000-00-00</p>
            </div>
        </div>
      </main>
      <Footer />
      <ContactFloatingPanel />
    </>
  );
}