// src/app/api/teaProductsGrid/route.js
import productsData from '@/data/productsGrid.json';

export async function GET() {
  try {
    // Имитация задержки сети
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return Response.json(productsData, {
      status: 200,
      headers: { 
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error loading products data:', error);
    return Response.json(
      { 
        error: 'Failed to load products data',
        details: error.message 
      },
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}