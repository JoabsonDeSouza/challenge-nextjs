import { Product } from '@/domain/products/product.model';
import { CreateProductInput } from '@/domain/products/product.schema';
import api from '@/services/http/client/api';

export async function listProducts(page = 1, limit = 10): Promise<Product[]> {
  const res = await api.get('/products', { params: { page, limit } });
  return res.data.data;
}

export async function createProduct(
  data: CreateProductInput,
): Promise<Product> {
  const res = await api.post('/products', data);
  return res.data.data;
}
