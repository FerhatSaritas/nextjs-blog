import Link from "next/link";
import { Post } from "../../../_constants";

export const Article = ({
  post,
  isDivider,
}: {
  post: Post;
  isDivider: boolean;
}) => {
  const { slug, frontmatter } = post;
  const { title, excerpt, date } = frontmatter;
  const formattedDate =
    typeof date === "string"
      ? new Date(date).toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : "";

  return (
    <article key={typeof title === "string" ? title : ""} className='py-2'>
      <Link
        href={`/post/${slug}`}
        className='text-3xl font-serif font-bold hover:text-accent hover:link'
      >
        {title}
      </Link>
      <p className='text-sm font-mono text-gray-300'>{formattedDate}</p>
      <p className='text-gray-400 font-mono'>{excerpt}</p>
      {isDivider && <div className='divider' />}
    </article>
  );
};

