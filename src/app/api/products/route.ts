import { CreateProductSchema } from '@/domain/products/product.schema';
import { createProduct, listProducts } from '@/domain/products/product.service';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = CreateProductSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Dados inválidos',
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const product = createProduct(parsed.data);
    return NextResponse.json({ data: product });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erro interno' },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  const allProducts = listProducts();

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = allProducts.slice(start, end);

  return NextResponse.json({
    success: true,
    data: paginated,
    meta: {
      page,
      limit,
      total: allProducts.length,
      totalPages: Math.ceil(allProducts.length / limit),
    },
  });
}
