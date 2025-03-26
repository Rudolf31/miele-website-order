import catalogData from '@/data/catalogBlocks.json';

export async function GET() {
  try {
    // Имитация задержки
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return Response.json(catalogData, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to load catalog data' },
      { status: 500 }
    );
  }
}