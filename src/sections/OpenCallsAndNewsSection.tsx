import { Typography } from "../components/Typography";
import blog from "../mock/blog.json";
import { BlogCard } from "../components/cards/BlogCard";
import { LayoutSection } from "../layout/LayoutSection";

export const OpenCallsAndNewsSection = () => {
  return (
    <LayoutSection>
      <header className="flex w-full flex-col gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-2">
          {/* TODO Add text */}
          <Typography className="text-left" variant="h2">
          Convocatorias abiertas y novedades

          </Typography>
        </div>
      </header>

      {/* FIXME change this for a call an api REST  */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blog.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </LayoutSection>
  );
};
