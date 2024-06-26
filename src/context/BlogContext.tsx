import { createContext, useEffect, useState } from "react";
import { Post } from "../types/Blog";
import { fetchBlogPosts } from "../services/blogs";
import { adaptPost } from "../helpers/postUtils";
import dataset from "../mock/blog.json";

interface BlogContextProps {
  posts: Post[];
  loading: boolean;
  error: Error | null;
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
    const fetchData = async () => {
      try {
        const apiPosts = await fetchBlogPosts();
        const posts: Post[] = apiPosts.map(adaptPost);
        console.log(posts);
        setPosts(posts);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          const posts: Post[] = dataset.results.map(adaptPost);
          setPosts(posts);
          setError(error);
          setLoading(false);
        }
      }
    };

    void fetchData();
  }, []);

  return (
    <BlogContext.Provider value={{ posts, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
}
