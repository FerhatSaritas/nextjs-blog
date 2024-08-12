import { PageTransitionWrapper } from "./_components/atoms";
import { Article } from "./_components/molecules";
import { PostType } from "./_constants";

// The Blog Page Content
export default async function Blog()
{
  const response = await fetch("http://localhost:3000/api/blog");
  const { posts } = await response.json();

  return (
    <PageTransitionWrapper>
      <main
        className={ `mx-auto px-4 transition-opacity ease-in delay-200 duration-700 ${posts !== null && posts.length ? "opacity-100" : "opacity-0"
          }` }
      >
        { posts.map((post: PostType, index: number) => (
          <Article post={ post } isDivider={ index !== posts.length - 1 } />
        )) }
      </main>
    </PageTransitionWrapper>
  );
}

