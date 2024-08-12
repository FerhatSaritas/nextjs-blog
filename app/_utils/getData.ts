
import fs from "fs";

export const getPost = async <T>(id: string): Promise<T> => {
  const domain = process.env.DOMAIN;

  const post = fs.readFile(`_public/_posts/example-post.md`, (err, data) => {
    if (err) console.error(__dirname);
    else console.log("data", data);
  });

  return await fetch(
    `http://${domain}/api/post?slug=${id}`,
    {
      method: "GET",
    }
  ).then((response) => {
    if (!response.ok) throw new Error(response.statusText);

    return response.json() as Promise<{post: T}>
  }).then(post => post.post)
}