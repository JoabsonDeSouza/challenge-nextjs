import { readProductsFile, writeProductsFile } from '@/lib/file-db';
import { randomUUID } from 'crypto';
import { Product } from './product.model';
import { CreateProductInput } from './product.schema';

export function createProduct(data: CreateProductInput): Product {
  const product: Product = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    quantity: 0,
    name: data.name ?? '',
    description: data.description ?? '',
    price:
      typeof data.price === 'string' ? Number(data.price) : (data.price ?? 0),
    image: data.image ?? '',
    category: data.category ?? '',
  };

  const products = readProductsFile();
  products.push(product);
  writeProductsFile(products);

  return product;
}

export function listProducts(): Product[] {
  return readProductsFile();
}
