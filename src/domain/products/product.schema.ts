import { z } from 'zod';

export const CreateProductSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatório'),
  price: z
    .string()
    .min(1, 'Preço é obrigatório')
    .refine((val) => !isNaN(Number(val.replace(',', '.'))), {
      message: 'Preço deve ser um número válido',
    }),
  image: z.string().min(1, 'Imagem é obrigatório'),
  category: z.string().min(1, 'Categoria é obrigatória'),
});

export type CreateProductInput = z.infer<typeof CreateProductSchema>;

export const defaultValues: CreateProductInput = {
  name: '',
  description: '',
  price: '',
  image: '',
  category: '',
};
