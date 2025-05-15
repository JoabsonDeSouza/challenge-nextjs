'use client';

import { AppReactProps } from '@/context/types';

import { CartProvider } from '@/context/cart';

const ContextsProvider = ({ children }: AppReactProps) => {
  return <CartProvider>{children}</CartProvider>;
};

export { ContextsProvider };
