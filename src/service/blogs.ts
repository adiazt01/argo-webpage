import { Post } from "../types/Blog";

interface ApiResponse {
  articles: Post[];
}

export async function fetchBlogPosts() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=20f85a29721942639eee179c911e8adb",
  );

  const data = (await response.json()) as ApiResponse;
  return data.articles;
}
