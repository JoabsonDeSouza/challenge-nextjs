import { Button } from '@/components/ui/button';
import { Product } from '@/domain/products/product.model';
import { formatValueByCurrency } from '@/utils/functions';
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  handleAddToCart: (data: { product: Product; quantity: number }) => void;
}

export default function ProductCard({
  product,
  handleAddToCart,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(product.quantity || 1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => Math.max(q - 1, 1));

  const handleAdd = () => {
    handleAddToCart({ product, quantity });
    setQuantity(1);
  };

  return (
    <div
      key={product.id}
      className="bg-[#d4bd8d] rounded-lg shadow-md mb-4 gap-1 flex flex-col"
    >
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={192}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex flex-col p-3  flex-1">
        <div className="flex flex-col flex-1">
          <div className="flex flex-row justify-between items-center">
            <h3>{product.name}</h3>
            <p className="font-bold">{formatValueByCurrency(product.price)}</p>
          </div>

          <span>{product.description}</span>
        </div>
        <div className="flex items-center gap-2 mt-4 justify-between w-full">
          <div className="flex items-center gap-2 h-9 bg-white rounded-md border border-gray-300 w-24">
            <Button variant="ghost" className="h-8 w-8" onClick={decrement}>
              −
            </Button>
            <span className="w-6">{quantity}</span>
            <Button variant="ghost" className="h-8 w-8" onClick={increment}>
              +
            </Button>
          </div>
          <Button variant="default" onClick={handleAdd}>
            Add Card
          </Button>
        </div>
      </div>
    </div>
  );
}
