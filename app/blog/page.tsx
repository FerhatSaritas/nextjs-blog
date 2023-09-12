import Link from "next/link";
import { Post } from "../_constants/posts.type";

// The Blog Page Content
export default async function Blog() {
  const response = await fetch("http://localhost:3000/api/blog");
  const { posts } = await response.json();
  return (
    <main>
      {posts.map((post: Post) => {
        //extract slug and frontmatter
        const { slug, frontmatter } = post;
        //extract frontmatter properties
        const { title, author, date } = frontmatter;

        //JSX for individual blog listing
        return (
          <article key={typeof title === "string" ? title : ""}>
            <Link href={`/post/${slug}`}>
              <h1>{title}</h1>
            </Link>
            <h3>{author}</h3>
            <h3>{date}</h3>
          </article>
        );
      })}
    </main>
  );
}

