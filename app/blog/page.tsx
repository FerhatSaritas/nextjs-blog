import { Post } from "../_constants/posts.type";
import { Article } from "../_components/molecules";

// The Blog Page Content
export default async function Blog() {
  const response = await fetch("http://localhost:3000/api/blog");
  const { posts } = await response.json();
  return (
    <main className='mx-auto px-4'>
      {posts.map((post: Post, index: number) => (
        <Article post={post} isDivider={index !== posts.length - 1} />
      ))}
    </main>
  );
}

