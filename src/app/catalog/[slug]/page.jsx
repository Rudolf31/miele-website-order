'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import apiConfig from '@/assets/apiConfig';
import Filters from '@/components/Filters/Filters';
import ProductCard from '@/components/ProductCard/ProductCard';


export default function CategoryPage() {
  const router = useRouter();
  const params = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  
  const categorySlug = params.slug;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const query = new URLSearchParams(filters).toString();
        const url = `${apiConfig.getCategory(categorySlug)}?${query}`;

        const response = await fetch(url);
        const result = await response.json();
        
        if (result.success) {
          setCategoryData(result);
        } else {
          router.push('/404');
        }
      } catch (error) {
        console.error('Ошибка загрузки:', error);
        router.push('/500');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categorySlug, filters]);

  const handleFilterChange = (filterKey, value) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
  };

  const applyFilters = () => {
    const query = new URLSearchParams(filters).toString();
    router.push(`/catalog/${categorySlug}?${query}`);
  };

  if (loading) return <div className="text-center py-8">Загрузка...</div>;
  if (!categoryData) return null;

  if (!categoryData?.products?.length) {
    return <div className="text-center py-8">Товары не найдены</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {categoryData.category.name}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <Filters 
            config={categoryData.filters}
            values={filters}
            onChange={handleFilterChange}
          />
          <button
            onClick={applyFilters}
            className="mt-4 w-full bg-[#f59b00] text-black py-2 px-4 rounded hover:bg-[#ffb733]"
          >
            Применить фильтры
          </button>
        </div>

        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
              novelty={product.novelty}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}