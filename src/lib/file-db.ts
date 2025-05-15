import { Product } from '@/domain/products/product.model';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.resolve(process.cwd(), 'products.json');

export function readProductsFile(): Product[] {
  try {
    if (!fs.existsSync(DB_PATH)) return [];
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading products file:', error);
    return [];
  }
}

export function writeProductsFile(data: Product[]) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}
