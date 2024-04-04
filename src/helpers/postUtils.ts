import { PostApi } from "../types/Blog";

export const adaptPost = (apiPost: PostApi) => {
  return {
    id: crypto.randomUUID(),
    title: apiPost.title,
    description: apiPost.description ?? null,
    urlToImage: apiPost.image_url ?? null,
    url: apiPost.link,
    tags: apiPost.keywords ? apiPost.keywords.slice(0, 3) : [],
  };
};
