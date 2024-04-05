import { PostApi } from "../types/Blog";

interface ApiResponse {
  results: PostApi[];
}

export async function fetchBlogPosts() {
  const response = await fetch(
    import.meta.env.VITE_API_NEWS as string,
  );

  const data = (await response.json()) as ApiResponse;
  return data.results;
}
