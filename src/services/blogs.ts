import { PostApi } from "../types/Blog";

interface ApiResponse {
  articles: PostApi[];
}

export async function fetchBlogPosts() {
  const response = await fetch(
    import.meta.env.VITE_API_NEWS as string,
  );

  const data = (await response.json()) as ApiResponse;
  return data.articles;
}
