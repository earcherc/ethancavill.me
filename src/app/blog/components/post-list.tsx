// src/app/blog/components/post-list.tsx
import React from 'react';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => {
        const date = new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });

        return (
          <li key={post.slug} className="p-6 hover:bg-slate-100 rounded-lg">
            <a href={`/blog/${post.slug}`}>
              <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
              <time dateTime={post.date} className="block text-sm font-normal leading-none text-gray-500">
                {date}
              </time>
              {post.description && <p className="mt-2 text-base text-gray-500">{post.description}</p>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
