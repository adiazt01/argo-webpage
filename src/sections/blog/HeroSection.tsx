import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { BlogContext } from "../../context/BlogContext";
import { BlogCard } from "../../components/cards/BlogCard";
import { LayoutSection } from "../../layout/LayoutSection";
import dataset from "../../mock/blog.json";
import { adaptPost } from "../../helpers/postUtils";

export const HeroSection = () => {
  // Use this for production
  // const { posts } = useContext(BlogContext);

  // To test the component isolated, we can use the line below
  const postsData = dataset;
  const posts = useMemo(() => postsData.results.map(adaptPost), [postsData]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const totalPages = useMemo(
    () => Math.ceil(posts.length / postsPerPage),
    [posts],
  );

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const mySectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mySectionRef.current) {
      mySectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  const handleClickChangePage = (index: number) => {
    setCurrentPage(index + 1);
  };

  return (
    <>
      <header className="flex min-h-screen w-full border border-red-500">
        <div className="flex min-h-screen w-full flex-col items-center justify-center text-black">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg">Welcome to the blog</p>
        </div>
      </header>
      <LayoutSection ref={mySectionRef} id="blog-posts">
        <section className="grid min-h-[120vh] grid-cols-1 grid-rows-2 gap-4 border-2 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((blog) => {
            const id = crypto.randomUUID();
            return <BlogCard key={id} blog={blog} />;
          })}
        </section>
        <ul className="flex flex-row flex-wrap justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            return (
              <button
                key={index}
                className={`rounded ${
                  currentPage === index + 1
                    ? "border-2 border-transparent bg-red-500 text-white transition"
                    : "border-2 bg-transparent text-gray-700 hover:scale-105 hover:bg-neutral-100"
                } px-4 py-2 font-medium shadow transition `}
                disabled={currentPage === index + 1}
                onClick={() => {
                  handleClickChangePage(index);
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </ul>
      </LayoutSection>
    </>
  );
};
