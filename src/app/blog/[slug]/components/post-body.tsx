// app/blog/[slug]/components/post-body.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { useMDXComponents } from '@/mdx-components';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

export function PostBody({ source }: { source: string | undefined }) {
  const components = useMDXComponents();

  if (!source) {
    return <div>Post not found.</div>;
  }

  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [
            // Adds support for GitHub Flavored Markdown
            remarkGfm,
            // generates a table of contents based on headings
            remarkToc,
          ],
          // These work together to add IDs and linkify headings
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      }}
      components={components}
    />
  );
}
