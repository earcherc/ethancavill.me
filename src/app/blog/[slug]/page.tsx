// app/blog/[slug]/page.tsx
import { PostBody } from '../components/post-body';
import { getPost } from '../../../utils/mdxUtils';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) {
    return <div>Post not found.</div>;
  }

  return <PostBody source={post.body}></PostBody>;
}
