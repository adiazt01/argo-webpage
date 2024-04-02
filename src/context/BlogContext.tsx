import { createContext, useEffect, useState } from "react";
import { Post } from "../types/Blog";

interface BlogContextProps {
  posts: Post[];
  loading: boolean;
  error: Error | null;
}

interface ApiResponse {
  articles: Post[];
}

export const BlogContext = createContext<BlogContextProps>({
  posts: [],
  loading: true,
  error: null,
});

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=20f85a29721942639eee179c911e8adb",
          { signal: abortController.signal },
        );
        const data = (await response.json()) as ApiResponse;
        setPosts(data.articles);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.log("Error: ", error.message);
          if (error.name === "AbortError") {
            console.log(
              "Request was aborted. This is likely due to navigating away from the page before the request completed",
            );
          } else {
            setError(error);
            setLoading(false);
          }
        } else {
          setError(new Error("An unknown error occurred"));
          setLoading(false);
        }
      }
    };

    void fetchBlogPosts();
    return () => {
      abortController.abort();
    };
  }, []);

  console.log(posts);

  return (
    <BlogContext.Provider value={{ posts, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
}
