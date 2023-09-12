import fs from "node:fs";
import { NextRequest, NextResponse } from "next/server";
import matter from "gray-matter";

export const GET = async (request: NextRequest) => {
  const files = fs.readdirSync(process.env.POSTS_LOCATION ?? "");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `${process.env.POSTS_LOCATION}/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return NextResponse.json({ posts });
};

