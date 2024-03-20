'use client';

import { usePathname } from 'next/navigation';
import HeaderBlob from './svgs/header-blob';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    // Special handling for root path
    if (path === '/' && pathname === '/') {
      return true;
    } else if (path !== '/' && pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <header id="home" className="m-auto px-20 max-w-screen-xl h-32">
      <HeaderBlob
        className={
          'h-[70rem] w-[70rem] hidden md:flex md:absolute animate-[spin_14s_ease-in-out_infinite] -mt-[56rem] -ml-[32rem]'
        }
      />

      <div className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-md">
        <div className="items-center self-center space-x-5 flex font-medium z-30">
          <Link
            className={`px-4 py-2 rounded-full font-medium transition-all duration-150 ease-in-out ${
              isActive('/') ? 'bg-blue-300 text-white shadow-md' : 'hover:bg-gray-100 hover:scale-105 text-gray-900'
            }`}
            href="/"
            passHref
          >
            Home
          </Link>
          <Link
            className={`px-4 py-2 rounded-full font-medium transition-all duration-150 ease-in-out ${
              isActive('/blog') ? 'bg-blue-300 text-white shadow-md' : 'hover:bg-gray-100 hover:scale-105 text-gray-900'
            }`}
            href="/blog"
            passHref
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}
