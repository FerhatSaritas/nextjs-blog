import Markdown from "react-markdown";
import { Post } from "../../_constants/posts.type";
import Loading from "@app/loading";
import { Badge } from "@app/_components/atoms";

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

  return post ? (
    <article className='prose min-w-full'>
      {bannerImage && <img src={bannerImage as string} />}
      <h1>{title}</h1>
      <h3 className='text-neutral-600'>
        Published on {new Date(date).toLocaleDateString("de-DE")}
      </h3>
      <h3>{category}</h3>
      <span className='flex'>
        {tags.map((tag: string) => (
          <Badge key={tag} color='primary'>
            {tag}
          </Badge>
        ))}
      </span>
      {content && <Markdown>{content}</Markdown>}
    </article>
  ) : (
    <Loading />
  );
}

