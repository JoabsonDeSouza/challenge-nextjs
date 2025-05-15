import { Product } from '@/domain/products/product.model';
import { createContext, useContext, useState } from 'react';

type CartItem = Product & { quantity: number };

type CartContextType = {
  cart: CartItem[];
  updateCart: (item: CartItem) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === item.id);
      if (existing) {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p,
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext deve ser usado dentro de um CartProvider');
  }
  return context;
}
