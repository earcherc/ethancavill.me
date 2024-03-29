// src/app/blog/page.tsx
import PostList from './components/post-list';
import getPosts from '../../utils/mdxUtils';
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The latest in AI',
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostList posts={posts} />
    </Suspense>
  );
}
