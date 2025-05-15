import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/sonner';
import { ContextsProvider } from '@/context';
import { ReactQueryProvider } from '@/lib/react-query/query-provider';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '400', '500', '600', '700'],
  variable: '--font-jetbrainsMono',
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
});

export const metadata: Metadata = {
  title: 'Meu lanchinho',
  description: 'App da minha lanchonete',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${jetbrainsMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <ContextsProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Toaster />
          </ContextsProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
