'use client';

import { Inter } from 'next/font/google';

import { useEffect, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { useRouter } from 'next/router';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full text-base antialiased`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
