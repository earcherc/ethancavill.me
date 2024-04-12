// src/utils/mdxUtils.ts
import matter from 'gray-matter';
import { cache } from 'react';
import fs from 'fs/promises';
import path from 'path';

const POSTS_FOLDER = path.join(process.cwd(), 'src/app/blog/posts');

// Helper function to recursively get all MDX files in a directory
async function getMdxFiles(dir: string): Promise<string[]> {
  let files = await fs.readdir(dir, { withFileTypes: true });
  const mdxFiles = files.map(async (file) => {
    const res = path.resolve(dir, file.name);
    return file.isDirectory() ? getMdxFiles(res) : path.extname(file.name) === '.mdx' ? res : [];
  });

  return (await Promise.all(mdxFiles)).flat();
}

export const getPosts = cache(async (): Promise<Post[]> => {
  const filePaths = await getMdxFiles(POSTS_FOLDER);

  return Promise.all(
    filePaths.map(async (filePath) => {
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
