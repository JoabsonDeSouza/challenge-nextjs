'use client';

import { Product } from '@/domain/products/product.model';
import { CreateProductInput } from '@/domain/products/product.schema';
import { ProductsService } from '@/services/data/products.service';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useListProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['product-list'],
    queryFn: async () => await ProductsService.list(),
  });
};

export const useCreateProduct = () => {
  return useMutation<Product, Error, CreateProductInput>({
    mutationKey: ['create-city'],
    mutationFn: async (data: CreateProductInput) => {
      const response = await ProductsService.create(data);
      return response;
    },
  });
};
