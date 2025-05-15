'use client';

import FilterHeader from '@/app/features/products/components/FilterHeader';
import ProductCard from '@/app/features/products/components/ProductCard';
import { useListProducts } from '@/app/features/products/queries/products';
import Loading from '@/components/Loading';
import { useCartContext } from '@/context/cart';
import { Product } from '@/domain/products/product.model';
import { useDebouncedSearch } from '@/hooks/useDebouncedSearch';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const { data: products = [], isLoading, error } = useListProducts();
  const { updateCart } = useCartContext();
  const [range, setRange] = useState<number[]>([0, 10000]);
  const [sort, setSort] = useState<'asc' | 'desc'>('desc');

  const { search, setSearch, filtered } = useDebouncedSearch(
    products,
    'name',
    range,
    'price',
  );

  const handleAddToCart = useCallback(
    (data: { product: Product; quantity: number }) => {
      const { product, quantity } = data;
      updateCart({ ...product, quantity });
      toast('Produto adicionado ao carrinho!', {
        className: 'toaster-neutral',
      });
    },
    [],
  );

  const handleSort = useCallback(() => {
    setSort((prevSort) => (prevSort === 'asc' ? 'desc' : 'asc'));
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearch('');
    setRange([0, 10000]);
    setSort('desc');
  }, []);

  console.log('>>>products', isLoading, error, products);

  if (isLoading) return <Loading />;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="container mx-auto bg-white min-h-[calc(100vh-180px)]">
      <FilterHeader
        search={search}
        setSearch={setSearch}
        range={range}
        setRange={setRange}
        handleSort={handleSort}
        handleClearFilters={handleClearFilters}
      />
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] p-6 mb-3"
        data-testid="product-list"
      >
        {[...filtered]
          .sort((a, b) =>
            sort === 'asc' ? a.price - b.price : b.price - a.price,
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
      </div>
    </div>
  );
}
