"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import apiConfig from '@/assets/apiConfig';

const SliderGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiConfig.getSliderGallery);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching carousel:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return <div className="aspect-video bg-gray-100 animate-pulse rounded-lg" />;
  }


  return (
    <div className="w-full max-w-6xl mx-auto p-4 lg:p-6">
      {/* Основное изображение */}
      <div className="relative aspect-video mb-4 md:mb-6">
        {images.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={item.image}
              alt={`Slide ${item.id}`}
              fill
              className="object-cover rounded-lg"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        ))}
      </div>

      {/* Миниатюры с кнопками */}
      <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
        <button
          onClick={prevSlide}
          className="p-1 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-2 max-w-[70%] sm:max-w-[75%] md:max-w-[80%]">
          {images.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 transition-all
                h-12 w-16 sm:h-14 sm:w-20 md:h-16 md:w-24
                ${index === currentIndex 
                  ? 'opacity-100 border-[#f59b00] border-2 rounded-lg scale-105' 
                  : 'opacity-50 hover:opacity-75'}`}
            >
              <Image
                src={item.image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 640px) 20vw, 15vw"
              />
            </button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-1 sm:p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SliderGallery;