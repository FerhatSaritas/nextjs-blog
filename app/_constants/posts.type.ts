export type PostType = {
  slug: string;
  frontmatter: {
    [key: string]: string | number | string[] | Date;
  };
  content?: string;
};

