import { Product } from '@/domain/products/product.model';
import { CreateProductInput } from '@/domain/products/product.schema';
import api from '@/services/http/client/api';

export const ProductsService = {
  async list(page = 1, limit = 10): Promise<Product[]> {
    const res = await api.get('/products', { params: { page, limit } });
    return res.data.data;
  },

  async create(data: CreateProductInput): Promise<Product> {
    const res = await api.post('/products', data);
    return res.data.data;
  },
};
