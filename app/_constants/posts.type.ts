export type Post = {
  slug: string;
  frontmatter: {
    [key: string]: string | number | string[];
  };
  content?: string;
};

