import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ViewsCounter from '@/components/ViewsCounter'; // ← DODAJ TEN IMPORT

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Moje Portfolio - Aleksandra Trojnar',
  description: 'GIS, fotografia, projekty przestrzenne',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Navbar />
        <ViewsCounter /> {/* ← DODAJ TEN KOMPONENT */}
        {children}
      </body>
    </html>
  );
}