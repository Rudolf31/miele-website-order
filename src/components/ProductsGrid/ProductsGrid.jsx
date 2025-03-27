'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import CatalogBanner from '../CatalogBanner/CatalogBanner';
import apiConfig from '@/assets/apiConfig';

export default function ProductsGrid() {
  const [gridItems, setGridItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiConfig.getProductsGrid);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();

        const processGridLayout = (items) => {
          const result = [];
          let position = 0;
          
          for (const item of items) {
            const rowPosition = position % 4;
            
            if (item.type === 'catalog' && item.span === 2) {
              // Если каталог не помещается в текущей строке
              if (rowPosition === 3) {
                // Переносим на следующую строку
                position += 1; // Переходим на новую строку
              }
              
              result.push({
                ...item,
                gridClass: 'col-span-2',
                uniqueKey: `item-${item.id}-${position}`
              });
              
              position += rowPosition === 1 ? 2 : 2; // Занимаем 2 места
            } else {
              result.push({
                ...item,
                uniqueKey: `item-${item.id}-${position}`
              });
              position += 1;
            }
          }
          
          return result;
        };

        setGridItems(processGridLayout(data));
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Загрузка...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {gridItems.map((item) => (
          <div 
            key={item.uniqueKey}
            className={`${item.gridClass || ''} min-h-[200px]`}
          >
            {item.type === 'product' ? (
              <ProductCard {...item} />
            ) : (
              <CatalogBanner {...item} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}