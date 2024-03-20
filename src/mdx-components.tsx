import Image, { ImageProps } from 'next/image';
import type { MDXComponents } from 'mdx/types';
import React from 'react'; // Import React for JSX syntax

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    // Customize the `h1` element with Tailwind CSS classes
    h1: ({ children }) => <h1 className="text-4xl mt-6 mb-4">{children}</h1>,
    img: (props) => (
      <Image
        className="max-w-full h-auto" // Use Tailwind for responsive images
        {...(props as ImageProps)}
      />
    ),

    // Spread the received components to allow for extensibility
    ...components,
  };
}
