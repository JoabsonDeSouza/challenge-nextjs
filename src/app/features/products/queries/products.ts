'use client';

import {
  createProduct,
  listProducts,
} from '@/app/features/products/services/products.service';
import { Product } from '@/domain/products/product.model';
import { CreateProductInput } from '@/domain/products/product.schema';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useListProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['product-list'],
    queryFn: async () => await listProducts(),
  });
};

export const useCreateProduct = () => {
  return useMutation<Product, Error, CreateProductInput>({
    mutationKey: ['create-product'],
    mutationFn: async (data: CreateProductInput) => {
      const response = await createProduct(data);
      return response;
    },
  });
};
