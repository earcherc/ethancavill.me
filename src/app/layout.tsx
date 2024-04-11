'use client';

import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../../public/favicons/icon.png" sizes="any" />
      </Head>

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
