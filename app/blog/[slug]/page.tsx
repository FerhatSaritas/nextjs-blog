import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Post } from "../../_constants/posts.type";

// The page for each post
export default function Post({ frontmatter, content }: Post) {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  return (
    <main>
      <img src={bannerImage as string} />
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

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const fileName = fs.readFileSync(`_posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

