// src/utils/mdxUtils.ts
import matter from 'gray-matter';
import { cache } from 'react';
import fs from 'fs/promises';
import path from 'path';

const POSTS_FOLDER = path.join(process.cwd(), 'src/app/blog/posts');

export const getPosts = cache(async (): Promise<Post[]> => {
  const posts = await fs.readdir(POSTS_FOLDER);

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = path.join(POSTS_FOLDER, file);
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);

        return { ...data, body: content } as Post;
      }),
  ).then((posts) => posts.filter((post): post is Post => post !== null));
});

export async function getPost(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export default getPosts;
