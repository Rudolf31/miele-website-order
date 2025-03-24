'use client';

import { useState, useEffect } from 'react';
import apiConfig from '@/assets/apiConfig';
import Link from 'next/link';

export default function Carousel() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiConfig.getCarousel);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setSlides(data);
      } catch (error) {
        console.error('Error fetching carousel:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (loading) return (
    <div className="h-[600px] flex items-center justify-center text-xl">
      Loading...
    </div>
  );

  if (!slides.length) return (
    <div className="h-[600px] flex items-center justify-center text-xl">
      No slides available
    </div>
  );

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-opacity duration-500"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      />

      {/* Контент в контейнере */}
      <div className="container relative h-full flex flex-col justify-between py-10 z-10">
        {/* Текст и кнопка */}
        <div className="max-w-[50%] text-white px-4">
            <p className="max-w-full mb-10 line-clamp-6 overflow-hidden text-ellipsis">{slides[currentSlide].text}</p>
            <Link href={slides[currentSlide].link}>
                <button className="px-7 min-w-40 py-2 bg-[#F59B00] hover:bg-[#F59B00]/80 text-black text-xl font-medium rounded-full transition-colors">
                    Кнопка
                </button>
            </Link>
        </div>

        {/* Навигация по слайдам */}
        <div className="flex gap-14 pl-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`text-white/70 hover:text-white transition-colors ${
                currentSlide === index ? 'text-white border-b-2 border-white' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              {slide.title}
            </button>
          ))}
        </div>

        {/* Стрелки навигации */}
        <button 
  className="absolute min-[1300px]:top-1/3 top-1/2 min-[1300px]:-left-1/12 left-4 -translate-y-1/2 w-14 h-14 bg-black/90 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
  onClick={goToPrev}
>
  <span className="relative text-2xl -left-0.5">ᐸ</span> {/* Микро-корректировка */}
</button>
<button 
  className="absolute min-[1300px]:top-1/3 top-1/2 min-[1300px]:-right-1/12 right-4 -translate-y-1/2 w-14 h-14 bg-black/90 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
  onClick={goToNext}
>
  <span className="relative text-2xl -right-0.5">ᐳ</span>
</button>
      </div>
    </div>
  );
}