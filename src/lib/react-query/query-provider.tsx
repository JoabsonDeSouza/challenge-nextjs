'use client';

import { queryClient } from '@/lib/react-query/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
