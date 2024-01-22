import fs from "node:fs";
import { NextRequest, NextResponse } from "next/server";
import matter from "gray-matter";

export const dynamic = 'force-dynamic'


export const GET = async (request: NextRequest) => {
  const slug = request.nextUrl.searchParams.get("slug");
  const file = fs.readFileSync(
    `${process.env.POSTS_LOCATION}/${slug}.md` ?? "",
    "utf-8"
  );
  if (!file) return NextResponse.json({ post: null });

  const { data: frontmatter, content } = matter(file);

  const post = {
    content,
    frontmatter,
  };
  return NextResponse.json({ post });
};

