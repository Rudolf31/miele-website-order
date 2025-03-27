"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import apiConfig from '@/assets/apiConfig';

const endpointMap = {
  'Новинки': apiConfig.getNovelties,
  'Бестселлеры': apiConfig.getBestsellers,
  'Скидки': apiConfig.getDiscounts,
  'Похожее': apiConfig.getSimilar,
  'Совместимые товары': apiConfig.getCompatible
};

export default function Selection({ types = Object.keys(endpointMap) }) {
  const [selectedType, setSelectedType] = useState(types[0]);
  const [expanded, setExpanded] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!types.includes(selectedType)) {
      setSelectedType(types[0]);
    }
  }, [types]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!endpointMap[selectedType]) return;
      
      setIsLoading(true);
      setExpanded(false);
      try {
        const response = await fetch(endpointMap[selectedType]);
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        const data = await response.json();
        setProducts(data.products || []);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, [selectedType]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  // Анимационные варианты для появления и исчезновения товаров
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="container mb-16 px-4 sm:px-8 pb-20">
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="flex flex-wrap gap-6">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`text-lg font-semibold ${
                selectedType === type 
                  ? 'text-[#f59b00] border-b-2 border-[#f59b00]' 
                  : 'text-white hover:text-[#f59b00]'
              } transition-all pb-1`}
            >
              {type}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#f59b00] font-semibold hover:underline whitespace-nowrap transition-all duration-300 ease-in-out"
        >
          {expanded ? 'скрыть все' : 'смотреть все'}
        </button>
      </div>

      {isLoading && <div className="text-center text-white py-8">Загрузка...</div>}

      {error && <div className="text-red-500 text-center py-8">{error}</div>}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, expanded ? products.length : 4).map((product) => (
            <AnimatePresence key={product.id}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full"
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  discount={product.discount}
                  novelty={product.novelty}
                />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      )}
    </section>
  );
}