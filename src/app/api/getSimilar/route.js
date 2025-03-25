import similarData from '@/data/similar.json';

export async function GET() {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return Response.json(similarData, {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to load novelties data' },
      { status: 500 }
    );
  }
}