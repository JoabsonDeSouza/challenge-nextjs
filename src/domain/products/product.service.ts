import { readProductsFile, writeProductsFile } from '@/lib/file-db';
import { randomUUID } from 'crypto';
import { Product } from './product.model';
import { CreateProductInput } from './product.schema';

export function createProduct(data: CreateProductInput): Product {
  const product: Product = {
    ...data,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const products = readProductsFile();
  products.push(product);
  writeProductsFile(products);

  return product;
}

export function listProducts(): Product[] {
  return readProductsFile();
}
