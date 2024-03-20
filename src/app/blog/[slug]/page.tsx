import { useMDXComponents } from '../../../mdx-components';
import { compileMDX } from 'next-mdx-remote/rsc';
import { readFile, access } from 'fs/promises';
import React from 'react';
import path from 'path';

const POSTS_FOLDER = path.join(process.cwd(), 'src/app/blog/posts');

async function readPostFile(slug: string) {
  const filePath = path.resolve(path.join(POSTS_FOLDER, `${slug}.mdx`));

  try {
    await access(filePath);
  } catch (err) {
    return null;
  }

  return readFile(filePath, { encoding: 'utf8' });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  if (!params || !params.slug) {
    throw new Error('No slug provided');
  }

  const markdown = await readPostFile(params.slug);

  if (!markdown) {
    return <div>Post not found.</div>;
  }

  const components = useMDXComponents();

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: markdown,
    components,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="prose prose-slate">
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
      {content}
    </article>
  );
}
