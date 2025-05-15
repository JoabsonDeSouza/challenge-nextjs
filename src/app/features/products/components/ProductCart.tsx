import { Product } from '@/domain/products/product.model';
import { formatValueByCurrency } from '@/utils/functions';

interface ProductCartProps {
  product: Product;
}

export default function ProductCart({ product }: ProductCartProps) {
  return (
    <div
      key={product.id}
      className="bg-[#d4bd8d] rounded-lg shadow-md mb-4 flex"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-28 h-28 object-cover rounded-lg"
      />
      <div className="flex flex-col p-3 flex-1">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p>Produto:</p>
              <p className="font-bold">{product.name}</p>
            </div>
            <div className="flex gap-2">
              <p>Valor:</p>
              <p className="font-bold">
                {formatValueByCurrency(product.price)}
              </p>
            </div>
            <div className="flex gap-2">
              <p>Quantidade:</p>
              <p className="font-bold">{product.quantity}</p>
            </div>
          </div>

          <span>{product.description}</span>
        </div>
      </div>
    </div>
  );
}
