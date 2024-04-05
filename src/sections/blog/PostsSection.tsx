import { useState, useMemo, useCallback } from "react";
import { BlogCard } from "../../components/cards/BlogCard";
import { Pagination } from "../../components/pagination/Pagination";
import { ITEMS_PER_PAGE } from "../../constants";
import { adaptPost } from "../../helpers/postUtils";
import { usePagination } from "../../hooks/usePagination";
import { LayoutSection } from "../../layout/LayoutSection";
import dataset from "../../mock/blog.json";
import { Typography } from "../../components/Typography";

export const PostsSection = () => {
  const [selectedTag, setSelectedTag] = useState("");
  // Use this for production
  // const { posts } = useContext(BlogContext);

  // To test the component isolated, we can use the line below
  const postsData = dataset;

  const posts = useMemo(() => postsData.results.map(adaptPost), [postsData]);

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
            }}
            aria-label="Filter by tag"
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a tag</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
                
        </div>
      </header>
      <ul className="grid min-h-[120vh] grid-cols-1 grid-rows-2 gap-4 border-2 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((blog) => {
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
