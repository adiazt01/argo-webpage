import { useCallback, useMemo, useState } from "react";
import { BlogContext } from "../../context/BlogContext";
import { BlogCard } from "../../components/cards/BlogCard";
import { LayoutSection } from "../../layout/LayoutSection";
import dataset from "../../mock/blog.json";
import { adaptPost } from "../../helpers/postUtils";
import { usePagination } from "../../hooks/usePagination";
import { ITEMS_PER_PAGE } from "../../constants";
import { Pagination } from "../../components/pagination/Pagination";
import { womenEnterprise } from "../../assets";
import { Typography } from "../../components/Typography";

export const HeroSection = () => {
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
    <>
      <main className="mx-auto my-24 flex max-w-6xl flex-col justify-start gap-12 border border-red-500 px-4">
        <header className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-md bg-gradient-to-br from-blue-900 to-blue-700 p-4">
            <Typography variant="h1">Nuestro blog</Typography>
            <Typography variant="p">
              Entérate de las últimas noticias y tendencias en el mundo de la
              tecnología y los negocios.
            </Typography>
          </div>
          <picture className="flex flex-col ">
            <img
              src={womenEnterprise}
              className="h-full w-full rounded-md object-cover"
            />
          </picture>
        </header>
      </main>

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
