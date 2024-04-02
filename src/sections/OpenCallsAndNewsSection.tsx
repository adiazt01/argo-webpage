import { useContext } from "react";
import { Typography } from "../components/Typography";
import { BlogCard } from "../components/cards/BlogCard";
import { LayoutSection } from "../layout/LayoutSection";
import { BlogContext } from "../context/BlogContext";

export const OpenCallsAndNewsSection = () => {
  const { posts } = useContext(BlogContext);
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
        {posts.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </LayoutSection>
  );
};
