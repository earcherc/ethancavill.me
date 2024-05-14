// app/blog/[slug]/page.tsx
import { PostBody } from '../components/post-body';
import { getPost } from '../../../utils/mdxUtils';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post?.title,
    description: post?.description || 'The latest in AI',
    robots: 'index, follow',
    openGraph: {
      url: `https://www.ethancavill.me/blog/${params.slug}`,
      title: post?.title,
      description: post?.description || 'The latest in AI',
      siteName: 'https://www.ethancavill.me',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ethcavill',
      title: post?.title,
      description: post?.description || 'The latest in AI',
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return <PostBody source={post.body}></PostBody>;
}
