import { useContext } from "react";
import { Typography } from "../../components/Typography";
import { BlogCard } from "../../components/cards/BlogCard";
import { LayoutSection } from "../../layout/LayoutSection";
import datatest from "../../mock/blog.json";
import { BlogContext } from "../../context/BlogContext";
import { Post, PostApi } from "../../types/Blog";

export const OpenCallsAndNewsSection = () => {
  // To production code, we should use the commented line below
  const { posts } = useContext(BlogContext);

  // To test the component isolated, we can use the line below
  // const posts = datatest;
  // const adaptedPosts = posts.results.map(adaptPost);

  return (
    <LayoutSection id="open-calls-and-news-section">
      <header className="flex w-full flex-col gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-2">
          <Typography className="text-left" variant="h2">
            Convocatorias abiertas y novedades
          </Typography>
        </div>
      </header>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts &&
          posts
            .slice(0, 3)
            .map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </ul>
    </LayoutSection>
  );
};
