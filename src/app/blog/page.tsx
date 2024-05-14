// src/app/blog/page.tsx
import PostList from './components/post-list';
import getPosts from '../../utils/mdxUtils';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ethan's Blog - Latest in AI and Development",
  description:
    'Dive into the latest discussions on AI, technology, and software development from Ethan, an experienced developer and agency owner.',
  robots: 'index, follow',
  openGraph: {
    url: 'https://www.ethancavill.me/blog',
    title: "Ethan's Blog - Latest in AI and Development",
    description: 'Explore insightful articles and the latest trends in AI and software development.',
    siteName: "Ethan's Blog",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ethcavill',
    title: "Ethan's Blog - Latest in AI and Development",
    description: 'Explore insightful articles and the latest trends in AI and software development.',
  },
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostList posts={posts} />
    </Suspense>
  );
}
