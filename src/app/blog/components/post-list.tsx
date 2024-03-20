// src/app/blog/components/post-list.tsx
import React from 'react';

export default function PostList({ posts }: { posts: Post[] }) {
  console.log(posts);

  return (
    <ul className="divide-y divide-gray-200">
      {posts.map((post) => {
        const date = new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });

        console.log(post);

        return (
          <li key={post.slug} className="py-8">
            <a href={`/blog/${post.slug}`} className="hover:underline">
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
