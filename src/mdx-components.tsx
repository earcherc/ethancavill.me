import Image, { ImageProps } from 'next/image';
import type { MDXComponents } from 'mdx/types';
import { Code } from 'bright';
import Link from 'next/link';
import React from 'react';

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    a: ({ children, ...props }) => {
      return (
        <Link {...props} href={props.href || ''}>
          {children}
        </Link>
      );
    },
    h1: ({ children }) => <h1 className="text-4xl mt-6 mb-4">{children}</h1>,
    img: (props) => (
      <Image
        className="max-w-full h-auto" // Use Tailwind for responsive images
        {...(props as ImageProps)}
      />
    ),
    pre: Code,

    // Spread the received components to allow for extensibility
    ...components,
  };
}
