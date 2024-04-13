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
    h1: ({ children }) => <h1 className="text-4xl mb-2">{children}</h1>,
    h2: ({ children, ...props }) => (
      <div {...props} className="group mb-2">
        <h2 className="text-2xl">{children}</h2>
      </div>
    ),
    h3: ({ children, ...props }) => (
      <div {...props} className="group">
        <h3 className="text-xl ">{children}</h3>
      </div>
    ),
    img: (props) => {
      return <Image {...(props as ImageProps)} className="w-auto h-auto rounded-xl" width={700} height={700} />;
    },
    pre: Code,
    Video: ({ src }) => <iframe src={src} className="w-full aspect-video" allowFullScreen></iframe>,
    Quote: ({ children, author }) => (
      <blockquote className="border-l-4 border-gray-500 italic my-4 pl-4 md:pl-12">
        {children}
        <cite>- {author}</cite>
      </blockquote>
    ),
    table: function Table({ className, ...props }: React.ComponentPropsWithoutRef<'table'>) {
      const tableClassName = `my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto ${className}`;
      return (
        <div className={tableClassName}>
          <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
            <table {...props} className="min-w-full divide-y divide-gray-200" />
          </div>
        </div>
      );
    },

    // Spread the received components to allow for extensibility
    ...components,
  };
}
