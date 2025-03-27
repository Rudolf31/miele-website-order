"use client";
import { useState } from 'react';
import Image from 'next/image';

// Импортируем изображения
import whatsappIcon from '/public/images/wa.svg';
import telegramIcon from '/public/images/tg.svg';
import phoneIcon from '/public/images/phoneBook.svg';
import phoneBookIcon from '/public/images/phone.svg';

export default function ContactFloatingPanel() {
  const [isHovered, setIsHovered] = useState(false);

  const contacts = [
    { 
      text: 'WhatsApp', 
      icon: whatsappIcon,
      link: 'https://wa.me/70000000000'
    },
    { 
      text: '@telegram', 
      icon: telegramIcon,
      link: 'https://t.me/yournickname'
    },
    { 
      text: '+7 (000) 000-00-00', 
      icon: phoneBookIcon,
      link: 'tel:+70000000000'
    }
  ];

  return (
    <div className="container relative">
      {/* Основной контент сайта */}

      {/* Плавающая панель ВНУТРИ контейнера, но с fixed позиционированием */}
      <div 
        className="fixed font-semibold right-1 sm:bottom-1/4 bottom-1/8 z-50 flex flex-col-reverse items-end gap-2"
        style={{
          right: 'calc(50% - (min(100vw, 1200px)/2) + 8px)' // Выравнивание по правому краю контейнера
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Основная кнопка телефона с выезжающим текстом */}
        <div className="flex items-center transition-all duration-500">
          <div 
            className={`bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 mr-5 whitespace-nowrap transition-all duration-300 ${
              isHovered ? 'translate-x-0 opacity-100 delay-300' : 'translate-x-10 opacity-0 delay-0'
            }`}
          >
            <span className="text-sm text-gray-800">Заказать звонок</span>
          </div>
          <a
            href="#callback"
            className="flex items-center justify-center transition-all duration-300"
          >
            <Image 
              src={phoneIcon} 
              alt="Заказать звонок" 
              width={60}
              height={60}
            />
          </a>
        </div>

        {/* Всплывающие кнопки */}
        <div className={`flex flex-col items-end gap-2 ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className={`flex mb-5 items-center transition-all duration-500 ${isHovered ? 'delay-100' : 'delay-0'}`}
              style={{
                transform: isHovered ? 'translateY(0)' : `translateY(${20 + (contacts.length - index) * 60}px)`,
                opacity: isHovered ? 1 : 0
              }}
            >
              {/* Текст */}
              <div 
                className={`bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 mr-5 whitespace-nowrap transition-all duration-300 ${
                  isHovered ? 'translate-x-0 opacity-100 delay-[400ms]' : 'translate-x-10 opacity-0 delay-0'
                }`}
              >
                <span className="text-sm text-gray-800">{contact.text}</span>
              </div>
              
              {/* Иконка */}
              <a
                href={contact.link}
                className={` flex items-center justify-center rounded-xl shadow-md transition-all duration-300 ${
                  isHovered ? 'scale-100 delay-200' : 'scale-90'
                }`}
              >
                <Image 
                  src={contact.icon} 
                  alt={contact.text} 
                  width={60}
                  height={60}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}