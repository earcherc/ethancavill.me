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
        <link rel="icon" href="../../public/favicons/favicon.ico" />
        <link rel="icon" href="../../public/favicons/android-chrome-192x192.png" />
        <link rel="icon" href="../../public/favicons/apple-touch-icon.png" />
        <link rel="icon" href="../../public/favicons/favicon-32x32.png" />
        <title>EC</title>
        <meta name="description" content="Ethan's portfolio and blog" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
