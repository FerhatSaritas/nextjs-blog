import Markdown from "react-markdown";
import { Post } from "../../_constants/posts.type";
import { Badge, Divider } from "@app/_components/atoms";

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
  const { title, category, date, bannerImage, tags } = frontmatter;

  return (
    <article className='prose prose-lg xl:prose-xl max-w-none prose-h4:text-neutral-600 prose-h4:m-0 prose-img:rounded-lg prose-h1:underline prose-a:text-primary xl:w-6/12 mx-auto'>
      {bannerImage && <img src={bannerImage as string} />}
      <h1>{title}</h1>
      <div className='flex flex-col md:flex-row md:justify-between mb-4'>
        <h4 className=''>
          {new Date(date).toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </h4>
        <h5>{category}</h5>
      </div>
      <span className='flex flex-row'>
        {tags.map((tag: string) => (
          <Badge key={tag} color='secondary'>
            {tag}
          </Badge>
        ))}
      </span>
      <Divider />
      {content && <Markdown>{content}</Markdown>}
    </article>
  );
}

