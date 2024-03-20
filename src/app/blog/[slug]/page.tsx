// app/blog/[slug]/page.tsx
import { getPost } from '../../../utils/mdxUtils';
import { PostBody } from '../components/post-body';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) {
    return <div>Post not found.</div>;
  }

  return <PostBody source={post.body}></PostBody>;
}
