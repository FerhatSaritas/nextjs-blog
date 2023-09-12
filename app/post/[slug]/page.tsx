import ReactMarkdown from "react-markdown";
import { Post } from "../../_constants/posts.type";

// The page for each post
export default async function Post({ params }: { params: { slug: string } }) {
  const response = await fetch(
    `http://localhost:3000/api/post?slug=${params.slug}`,
    {
      method: "GET",
    }
  );
  const { post } = await response.json();
  const { frontmatter, content } = post;
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  return (
    <main>
      {bannerImage && <img src={bannerImage as string} />}
      <h1>{title}</h1>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {category} || {(tags as string[]).join()}
      </h3>
      {content && <ReactMarkdown>{content}</ReactMarkdown>}
    </main>
  );
}

