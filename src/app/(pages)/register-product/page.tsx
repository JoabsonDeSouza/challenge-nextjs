'use client';

import {
  useCreateProduct,
  useListProducts,
} from '@/app/features/products/queries/products';
import { ControlledTextInput } from '@/components/ControlledTextInput';
import { Button } from '@/components/ui/button';
import {
  CreateProductInput,
  CreateProductSchema,
  defaultValues,
} from '@/domain/products/product.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function RegisterProductForm() {
  const { mutateAsync: createProduct, isPending, error } = useCreateProduct();
  const { refetch: listProducts } = useListProducts();

  const form = useForm<CreateProductInput>({
    resolver: zodResolver(CreateProductSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const onSubmit = async (data: CreateProductInput) => {
    try {
      await createProduct(data);
      await listProducts();

      toast('Produto criado com sucesso!', {
        className: 'toaster-success',
      });
      form.reset();
    } catch (err) {
      console.error(err);
      toast(`Ocorreu um erro ao criar o produto - ${error?.message}`, {
        className: 'toaster-error',
      });
    }
  };

  return (
    <div className="container mx-auto min-h-[calc(100vh-180px)] pt-7">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-[90%] md:max-w-2/4 mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
        >
          <ControlledTextInput
            name="name"
            control={form.control}
            label="Nome do produto"
            placeholder="Nome do produto"
          />

          <ControlledTextInput
            name="description"
            control={form.control}
            label="Descrição"
            placeholder="Descrição"
          />

          <ControlledTextInput
            name="price"
            control={form.control}
            label="Valor"
            placeholder="Valor"
            type="number"
            step="0.01"
          />

          <ControlledTextInput
            name="image"
            control={form.control}
            label="URL da imagem"
            placeholder="URL da imagem"
          />

          <ControlledTextInput
            name="category"
            control={form.control}
            label="Categoria"
            placeholder="Categoria"
          />

          <Button type="submit" disabled={isPending} className="h-11 mt-2">
            Cadastrar Produto
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
