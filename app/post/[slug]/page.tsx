import Markdown from "react-markdown";
import { Badge, Divider, PageTransitionWrapper } from "@app/_components/atoms";
import { getPost } from "@app/_utils"
import { PostType } from "../../_constants";

// The page for each post
export default async function Post({ params }: { params: { slug: string } }): Promise<JSX.Element>
{
  const { frontmatter, content } = await getPost<PostType>(params.slug)
  const { title, category, date, bannerImage, tags } = frontmatter;

  return (
    <PageTransitionWrapper>
      <article className='prose prose-lg font-mono xl:prose-xl max-w-none prose-h4:text-neutral-600 prose-h4:m-0 prose-img:rounded-lg prose-h1:underline prose-a:text-primary xl:w-9/12 mx-auto'>
        { bannerImage && <img src={ bannerImage as string } /> }
        { typeof title === "string" ? <h1>{ title }</h1> : "" }
        <div className='mb-2'>
          <h4>
            { date instanceof Date ? new Date(date).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }) : "" }
          </h4>
        </div>
        <span className='flex flex-row'>
          { Array.isArray(tags) ? tags.map((tag: string) => (
            <Badge key={ tag } color='primary'>
              { tag }
            </Badge>
          )) : "" }
        </span>
        <Divider />
        { content && <Markdown>{ content }</Markdown> }
      </article>
    </PageTransitionWrapper>
  );
}

