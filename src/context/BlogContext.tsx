import { createContext, useEffect, useState } from "react";
import { Post } from "../types/Blog";

interface BlogContextProps {
  posts: Post[];
  children: React.ReactNode;
}

export const BlogContext = createContext({
  posts: [],
  loading: true,
  error: null,
});

export function BlogProvider({ children }: BlogContextProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: abortController.signal },
        );
        const data = (await response.json()) as Post[];
        setPosts(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            console.log("Fetch aborted");
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

  return (
    <BlogContext.Provider value={{ posts, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
}
