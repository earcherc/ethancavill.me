// app/blog/[slug]/components/post-body.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { useMDXComponents } from '@/mdx-components';
import type { PluggableList } from 'unified';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';

export function PostBody({ source }: { source: string | undefined }) {
  const components = useMDXComponents();
  const remarkPlugins = [remarkGfm, [remarkToc, { tight: true, maxDepth: 5 }]] as PluggableList;
  const rehypePlugins = [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'append',
        properties: {},
        content: {
          type: 'element',
          tagName: 'span',
          properties: {
            className: ['anchor-link-icon', 'opacity-0', 'group-hover:opacity-100', 'ml-1'],
          },
          children: [{ type: 'text', value: '#' }],
        },
      },
    ],
  ] as PluggableList;

  if (!source) {
    return <div>Post not found.</div>;
  }

  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins,
          rehypePlugins,
        },
      }}
      components={components}
    />
  );
}
