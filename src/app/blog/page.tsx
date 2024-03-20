import { PostListRSC } from '@components/post-list';
import { Suspense } from 'react';

const Blog = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostList paginate={true} />
    </Suspense>
  );
};

export default Blog;
