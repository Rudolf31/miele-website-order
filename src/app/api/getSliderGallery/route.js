import sliderGallery from '@/data/sliderGallery.json';

export async function GET() {
  try {
    // Имитация задержки сети (опционально)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return Response.json(sliderGallery, {
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