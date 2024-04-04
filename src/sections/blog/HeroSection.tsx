import {  useCallback, useMemo, useState } from "react";
import { BlogContext } from "../../context/BlogContext";
import { BlogCard } from "../../components/cards/BlogCard";
import { LayoutSection } from "../../layout/LayoutSection";
import dataset from "../../mock/blog.json";
import { adaptPost } from "../../helpers/postUtils";
import { usePagination } from "../../hooks/usePagination";
import { ITEMS_PER_PAGE } from "../../constants";
import { Pagination } from "../../components/pagination/Pagination";

export const HeroSection = () => {
  const [selectedTag, setSelectedTag] = useState("");
  // Use this for production
  // const { posts } = useContext(BlogContext);

  // To test the component isolated, we can use the line below
  const postsData = dataset;

  const posts = useMemo(() => postsData.results.map(adaptPost), [postsData]);

  const tags = useMemo(() => [...new Set(posts.flatMap((post) => post.tags))], [posts]);

  const filteredPosts = useMemo(() => selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts, [selectedTag, posts]);

  const {
    changePage: originalChangePage,
    currentItems: currentPosts,
    currentPage,
    sectionRef,
    totalPages,
  } = usePagination(filteredPosts, ITEMS_PER_PAGE);

  const changePage = useCallback(originalChangePage, [originalChangePage]);

  return (
    <>
      <LayoutSection id="hero-section">
        <header className="flex min-h-screen w-full border border-red-500">
          <div className="flex min-h-screen w-full flex-col items-center justify-center text-black">
            <h1 className="text-4xl font-bold">Blog</h1>
            <p className="text-lg">Welcome to the blog</p>
          </div>
        </header>
      </LayoutSection>

      <LayoutSection ref={sectionRef} id="blog-posts">
        <div>
          <select
            value={selectedTag}
            onChange={(e) => {
              setSelectedTag(e.target.value);
            }}
          >
            <option value="">Select a tag</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
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
    </>
  );
};
