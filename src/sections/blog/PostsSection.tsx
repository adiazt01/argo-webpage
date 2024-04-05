/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useState, useMemo, useCallback, useContext } from "react";
import { BlogCard } from "../../components/cards/BlogCard";
import { Pagination } from "../../components/pagination/Pagination";
import { ITEMS_PER_PAGE } from "../../constants";
import { usePagination } from "../../hooks/usePagination";
import { LayoutSection } from "../../layout/LayoutSection";
import { Typography } from "../../components/Typography";
import { BlogContext } from "../../context/BlogContext";

export const PostsSection = () => {
  const [selectedTag, setSelectedTag] = useState("");
   const { posts } = useContext(BlogContext);

  const tags = useMemo(
    () => [...new Set(posts.flatMap((post) => post.tags))],
    [posts],
  );

  const filteredPosts = useMemo(
    () =>
      selectedTag
        ? posts.filter((post) => post.tags.includes(selectedTag))
        : posts,
    [selectedTag, posts],
  );

  const {
    changePage: originalChangePage,
    currentItems: currentPosts,
    currentPage,
    sectionRef,
    totalPages,
  } = usePagination(filteredPosts, ITEMS_PER_PAGE);

  const changePage = useCallback(originalChangePage, [originalChangePage]);
  return (
    <LayoutSection ref={sectionRef} id="blog-posts">
      <header className="flex flex-col gap-4">
        <Typography variant="h2">Artículos</Typography>
        <div className="row flex flex-wrap gap-2">
          <select
            value={selectedTag}
            onChange={(e) => {
              setSelectedTag(e.target.value);
              changePage(0);
            }}
            aria-label="Filter by tag"
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a tag</option>
            {tags && tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>        
        </div>
      </header>
      <ul className="grid min-h-[120vh] grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts && currentPosts.map((blog) => {
          const id = crypto.randomUUID();
          return <BlogCard key={id} blog={blog} />;
        })}
      </ul>
      <Pagination
        length={totalPages}
        currentPage={currentPage}
        changePage={changePage}
      />
    </LayoutSection>
  );
};
