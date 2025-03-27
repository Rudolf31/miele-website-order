import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(request, { params }) { // Используем params
  const { slug } = params; // Получаем slug из динамического сегмента
  const { searchParams } = new URL(request.url);
  const filters = Object.fromEntries(searchParams.entries());

  if (slug.includes('..') || slug.includes('/')) {
    return NextResponse.json(
      { success: false, error: "Недопустимый slug" },
      { status: 400 }
    );
  }

  console.log('Slug from params:', slug);
  console.log('Full path:', path.join(
    process.cwd(),
    'src',
    'data',
    'categories',
    `${slug}.json`
  ));

  try {
    // Загрузка данных категории
    const filePath = path.join(
      process.cwd(),
      'src', // ← Добавляем src
      'data',
      'categories',
      `${slug}.json`
    );
    const fileData = await fs.readFile(filePath, 'utf8');
    const { category, filters: categoryFilters, products } = JSON.parse(fileData);

    // Универсальная фильтрация
    const filteredProducts = products.filter(product => {
      return categoryFilters.every(filterConfig => {
        const filterKey = filterConfig.key;
        const filterValue = filters[filterKey];

        // Если фильтр не выбран - пропускаем
        if (!filterValue) return true;

        // Обработка по типу фильтра
        switch (filterConfig.type) {
          case 'checkbox':
            return product.specs[filterKey] === filterValue;

          case 'range':
            const [min, max] = filterValue.split('-').map(Number);
            return product.price >= min && product.price <= max;

          default:
            return true;
        }
      });
    });

    return NextResponse.json({
      success: true,
      category,
      filters: categoryFilters,
      products: filteredProducts
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Категория не найдена" },
      { status: 404 }
    );
  }
}