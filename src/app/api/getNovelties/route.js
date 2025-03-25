import noveltiesData from '@/data/novelties.json';

export async function GET() {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return Response.json(noveltiesData, {
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