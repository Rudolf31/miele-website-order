"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ContactFloatingPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleMainButtonHover = () => {
    if (!isMobile) {
      clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handlePanelLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const handleMainButtonClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div 
      ref={panelRef}
      className="fixed font-semibold right-1 sm:bottom-1/4 bottom-1/8 z-50"
      style={{ right: 'calc(50% - (min(100vw, 1200px)/2 + 8px)' }}
    >
      <div className="flex flex-col-reverse items-end gap-2">
        {/* Основная кнопка */}
        <button
          onMouseEnter={handleMainButtonHover}
          onMouseLeave={handlePanelLeave}
          onClick={handleMainButtonClick}
          className="relative z-50 cursor-pointer transition-transform hover:scale-105 active:scale-95"
          aria-label={isOpen ? 'Закрыть контакты' : 'Открыть контакты'}
        >
          <Image 
            src="/images/phoneBook.svg" 
            alt="Контакты" 
            width={60}
            height={60}
          />
        </button>

        {/* Контактные иконки */}
        <div 
          className={`flex flex-col items-end gap-2 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
          onMouseEnter={() => clearTimeout(timeoutRef.current)}
          onMouseLeave={handlePanelLeave}
        >
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className={`flex items-center transition-all duration-500 ${
                isOpen ? 'delay-100' : 'delay-0'
              }`}
              style={{
                transform: isOpen ? 'translateY(0)' : `translateY(${20 + (contacts.length - index) * 60}px)`,
                opacity: isOpen ? 1 : 0
              }}
            >
              <div 
                className={`bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1 mr-5 whitespace-nowrap transition-all duration-300 ${
                  isOpen ? 'translate-x-0 opacity-100 delay-[400ms]' : 'translate-x-10 opacity-0 delay-0'
                } ${isMobile ? 'hidden' : ''}`}
              >
                <span className="text-sm text-gray-800">{contact.text}</span>
              </div>
              
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center rounded-xl transition-all duration-300 ${
                  isOpen ? 'scale-100 delay-200' : 'scale-90'
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