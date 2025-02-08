'use client';

import { Inter } from 'next/font/google';

import Header from './components/header';
import Footer from './components/footer';

import './globals.css';

import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full text-base antialiased`}>
      <body>
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
