interface PostMetadata {
  slug: string;
  title: string;
  description?: string;
  date?: string;
}

interface Post {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  body?: string;
  published?: boolean;
}
