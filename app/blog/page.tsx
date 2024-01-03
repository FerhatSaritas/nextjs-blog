"use client";
import { Post } from "../_constants/posts.type";
import { Article } from "../_components/molecules";
import { Transition } from "@tailwindui/react";
import { useEffect, useState } from "react";

// The Blog Page Content
export default async function Blog() {
  const [show, setShow] = useState<boolean>(false);
  const response = await fetch("http://localhost:3000/api/blog");
  const { posts } = await response.json();

  useEffect(() => {
    if (posts !== null && posts.length) setShow(true);
  }, [show, setShow, posts]);

  return (
    <main
      className={`mx-auto px-4 transition-opacity ease-in delay-200 duration-700 ${
        posts !== null && posts.length ? "opacity-100" : "opacity-0"
      }`}
    >
      <Transition
        show={show}
        enter='transition-opacity duration-700'
        enterFrom='opacity-0'
        enterTo='opacity-100'
      >
        {posts.map((post: Post, index: number) => (
          <Article post={post} isDivider={index !== posts.length - 1} />
        ))}
      </Transition>
    </main>
  );
}

