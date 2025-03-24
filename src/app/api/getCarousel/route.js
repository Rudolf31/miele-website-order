// src/app/api/getCarousel/route.js
import carouselData from '@/data/carousel.json';

export async function GET() {
  try {
    // Имитация задержки сети (опционально)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return Response.json(carouselData, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to load data' },
      { status: 500 }
    );
  }
}