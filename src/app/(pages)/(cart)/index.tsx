import ProductCart from '@/app/features/cart/ProductCart';
import Cart from '@/components/assets/Cart';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useCartContext } from '@/context/cart';
import { formatValueByCurrency } from '@/utils/functions';
import { useMemo } from 'react';

export default function CartButton() {
  const { cart, clearCart } = useCartContext();

  const totalValue = useMemo(() => {
    const total = cart?.reduce((acc, product) => {
      const productTotal = product.price * product.quantity;
      return acc + productTotal;
    }, 0);
    return formatValueByCurrency(total || 0);
  }, [cart]);

  return (
    <Dialog>
      <DialogTrigger className="font-medium capitalize transition-all hover:text-accent cursor-pointer flex h-8 justify-center items-center">
        <Cart />
        {`(${cart?.length})`}
      </DialogTrigger>
      <DialogContent className="bg-[#f8f8f8] w-[90vw] max-h-[90vh] p-6">
        <DialogTitle>Produtos do Carrinho</DialogTitle>
        <DialogDescription className="flex flex-col">
          <div className="flex flex-col flex-1">
            {cart?.length === 0 ? (
              'Seu carrinho está vazio'
            ) : (
              <div className="flex flex-col flex-1">
                <span>
                  Aqui estão os produtos que você adicionou ao carrinho.
                </span>
                <div className="mt-3 overflow-y-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh]">
                  {cart?.map((product) => (
                    <ProductCart key={product.id} product={product} />
                  ))}
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center w-full py-2 bg-[#d7d3d3] rounded-[6px]">
                  <Button
                    variant="ghost"
                    onClick={clearCart}
                    className="w-full sm:w-auto order-2 md:order-1 mt-2 md:mt-0"
                  >
                    Limpar Carrinho
                  </Button>
                  <div className="flex gap-2 items-center mt-2 md:mt-0 md:order-2 order-1 w-full justify-center md:justify-end md:pr-4">
                    <span>Valor Total do Pedido:</span>
                    <span className="font-bold">{totalValue}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
