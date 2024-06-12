
export const getPost = async <T>(id: string): Promise<T> => {
  const domain = process.env.DOMAIN;

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