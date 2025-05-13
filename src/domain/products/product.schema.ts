import { z } from 'zod';

export const CreateProductSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatório'),
  price: z.number().positive('Preço deve ser positivo'),
  image: z.string().min(1, 'Imagem é obrigatório'),
});

export type CreateProductInput = z.infer<typeof CreateProductSchema>;