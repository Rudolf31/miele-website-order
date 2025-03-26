"use client";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useEffect, useState } from 'react';
import apiConfig from '../../assets/apiConfig';
import ContactFloatingPanel from '../components/ContactFloatingPanel/ContactFloatingPanel';
import Link from 'next/link';

export default function Catalog() {
  const [catalogData, setCatalogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCatalogData = async () => {
      try {
        const res = await fetch(apiConfig.getCatalogBlocks);
        if (!res.ok) throw new Error('Failed to fetch catalog data');
        const data = await res.json();
        setCatalogData(data);
      } catch (error) {
        console.error('Error fetching catalog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalogData();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <main className="container mx-auto py-20">
          <div className="flex justify-center items-center min-h-[500px]">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
          </div>
        </main>
        <Footer />
        <ContactFloatingPanel />
      </>
    );
  }

  // Разделяем данные на две колонки
  const items = catalogData.items;
  const half = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, half);
  const rightColumn = items.slice(half);

  return (
    <>
      <Header />
      <main className="container mx-auto py-20">
        <div className="flex flex-col lg:flex-row gap-10 justify-center">
          {/* Левая колонка */}
          <div className="flex-1 lg:h-full space-y-10">
            {leftColumn.map((item) => (
              <div 
              key={item.id}
              className="lg:w-[500px] relative group rounded-lg overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-auto object-contain object-left"
              />
              <Link href={item.link} className="absolute bottom-1/12 left-1/12 px-8 py-3 rounded-full bg-[#F59B00]">
                <h3 className="text-xl font-semibold ">{item.title}</h3>
              </Link>
            </div>
            ))}
          </div>

          {/* Правая колонка */}
          <div className="flex-1 lg:h-full space-y-10 mt-10 lg:mt-0">
            {rightColumn.map((item) => (
              <div 
                key={item.id}
                className="lg:w-[500px] relative group rounded-lg overflow-hidden"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-auto object-contain object-left"
                />
                <Link href={item.link} className="absolute bottom-1/12 left-1/12 px-8 py-3 rounded-full bg-[#F59B00]">
                <h3 className="text-xl font-semibold ">{item.title}</h3>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ContactFloatingPanel />
    </>
  );
}