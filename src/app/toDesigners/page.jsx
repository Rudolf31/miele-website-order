"use client";
import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactFloatingPanel from '../components/ContactFloatingPanel/ContactFloatingPanel';
import Link from 'next/link';

export default function ToDesigners() {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    const cleanPhone = phone.replace(/\D/g, '');
if (!/^7\d{10}$/.test(cleanPhone)) {
  newErrors.phone = 'Неверный формат телефона';
}

    if (!/^[а-яА-ЯёЁa-zA-Z\s\-']{2,50}$/.test(name.trim())) {
      newErrors.name = 'Некорректное имя';
    }

    if (selectedContacts.length === 0) {
      newErrors.contacts = 'Выберите способ связи';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ phone, name, contactMethods: selectedContacts });
    }
  };

  return (
    <>
      <Header />
      <main className="bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url(/images/toDesigners/background1.png)" }}>
        <div className='container mx-auto px-4 pb-20'>
          <h2 className='text-2xl sm:text-xl font-semibold text-[#f59b00] pt-10 sm:pt-20 mb-5 sm:mb-11 '>
            Приглашаем к сотрудничеству дизайнеров!
          </h2>

          <div className='flex flex-wrap text-white mb-10'>
            <div className='flex items-start mr-10 gap-3 mb-4 md:mb-0'>
              <span className="text-2xl text-[#f59b00] mt-1">ᐳ</span>
              <p className='font-semibold max-w-[316px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
            <div className='flex items-start w-full md:w-1/2 gap-3'>
              <span className="text-2xl text-[#f59b00] mt-1">ᐳ</span>
              <p className='font-semibold max-w-[316px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className='max-w-[463px] '>
            <div className='p-5 backdrop-blur-sm bg-white/30 rounded-lg mb-6'>
              <h3 className='mb-8 font-medium'>
                Оставьте заявку, чтобы мы могли с вами связаться
              </h3>

              <div className='mb-6 px-5'>
                <div>
                  <label className='text-xs text-[#373737] mb-2 block text-left'>
                    Телефон
                  </label>
                  <input
                    className='border rounded-lg 
                    w-full py-3 px-4
                    focus:outline-none focus:ring-2 focus:ring-[#f59b00] focus:border-transparent
                    transition-all duration-200
                    placeholder:text-[#999]
                    shadow-sm'
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setErrors(prev => ({...prev, phone: ''}));
                    }}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs block mt-1">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className='mb-6 px-5'>
                <div>
                  <label className='text-xs text-[#373737] mb-2 block text-left'>
                    Имя
                  </label>
                  <input
                    className='border rounded-lg 
                    w-full py-3 px-4
                    focus:outline-none focus:ring-2 focus:ring-[#f59b00] focus:border-transparent
                    transition-all duration-200
                    placeholder:text-[#999]
                    shadow-sm'
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors(prev => ({...prev, name: ''}));
                    }}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs block mt-1">{errors.name}</span>
                  )}
                </div>
              </div>

              <div className='mb-2 px-5'>
                <label className='text-xs text-[#373737] mb-3 block text-left'>
                  Способ связи
                </label>
                <div className='sm:flex sm:flex-wrap grid grid-cols-1 gap-3 justify-between'>
                  {['Телефон', 'WhatsApp', 'Telegram'].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => {
                        setSelectedContacts(prev => 
                          prev.includes(method) 
                            ? prev.filter(m => m !== method) 
                            : [...prev, method]
                        );
                        setErrors(prev => ({...prev, contacts: ''}));
                      }}
                      className={`px-5 py-2 rounded-full text-sm transition-colors min-w-[100px]
                        ${selectedContacts.includes(method)
                          ? 'bg-[#f59b00] border-2 border-[#f59b00]'
                          : 'border-2 text-[#2B2B2B] hover:bg-gray-300'}
                      `}
                    >
                      {method}
                    </button>
                  ))}
                </div>
                {errors.contacts && (
                  <span className="text-red-500 text-xs block mt-2">{errors.contacts}</span>
                )}
                <input
                  type="hidden"
                  name="contactMethods"
                  value={selectedContacts.join(',')}
                />
              </div>
            </div>

            <div className='flex justify-center '>
              <button
                type="submit"
                className='bg-[#f59b00] rounded-full max-w-[383px] w-9/12 text-center py-2 px-4 mb-5 text-white'
              >
                Получить консультацию
              </button>
            </div>

            <p className='text-white'>
              Нажимая кнопку, вы соглашаетесь c{' '}
              <Link href="/privacy-policy" className='text-[#f59b00] ml-1 hover:underline'>
                политикой конфиденциальности
              </Link>
            </p>
          </form>
        </div>
      </main>
      <Footer />
      <ContactFloatingPanel />
    </>
  );
}