"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function ContactFloatingPanel() {
  const [isHovered, setIsHovered] = useState(false);
  const panelRef = useRef(null);
  const timeoutRef = useRef(null);

  const contacts = [
    { 
      text: 'WhatsApp', 
      icon: '/images/wa.svg',
      link: 'https://wa.me/70000000000'
    },
    { 
      text: '@telegram', 
      icon: '/images/tg.svg',
      link: 'https://t.me/yournickname'
    },
    { 
      text: '+7 (000) 000-00-00', 
      icon: '/images/phone.svg',
      link: 'tel:+70000000000'
    }
  ];

  const handleMainButtonEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handlePanelLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  const handlePanelEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  return (
    <div 
      className="fixed font-semibold right-1 sm:bottom-1/4 bottom-1/8 z-50"
      style={{
        right: 'calc(50% - (min(100vw, 1200px)/2 + 8px)'
      }}
    >
      {/* Основная кнопка */}
      <div 
        className="flex flex-col-reverse items-end gap-2"
        onMouseLeave={handlePanelLeave}
      >
        <div 
          className="flex items-center transition-all duration-500"
          onMouseEnter={handleMainButtonEnter}
        >
          <div 
            className={`bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 mr-5 whitespace-nowrap transition-all duration-300 ${
              isHovered ? 'translate-x-0 opacity-100 delay-300' : 'translate-x-10 opacity-0 delay-0'
            }`}
          >
            <span className="text-sm text-gray-800">Заказать звонок</span>
          </div>
          <div className="cursor-pointer">
            <Image 
              src="/images/phoneBook.svg" 
              alt="Заказать звонок" 
              width={60}
              height={60}
            />
          </div>
        </div>

        {/* Всплывающие кнопки */}
        <div 
          className={`flex flex-col items-end gap-2 ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}`}
          onMouseEnter={handlePanelEnter}
        >
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className={`flex mb-5 items-center transition-all duration-500 ${isHovered ? 'delay-100' : 'delay-0'}`}
              style={{
                transform: isHovered ? 'translateY(0)' : `translateY(${20 + (contacts.length - index) * 60}px)`,
                opacity: isHovered ? 1 : 0
              }}
            >
              <div 
                className={`bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 mr-5 whitespace-nowrap transition-all duration-300 ${
                  isHovered ? 'translate-x-0 opacity-100 delay-[400ms]' : 'translate-x-10 opacity-0 delay-0'
                }`}
              >
                <span className="text-sm text-gray-800">{contact.text}</span>
              </div>
              
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center rounded-xl transition-all duration-300 ${
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