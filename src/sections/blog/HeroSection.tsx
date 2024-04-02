import { useContext, useState } from "react";
import { BlogContext } from "../../context/BlogContext";
import { BlogCard } from "../../components/cards/BlogCard";
import { LayoutSection } from "../../layout/LayoutSection";

export const HeroSection = () => {
  const { posts } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log(posts);

  return (
    <>
      <header className="flex min-h-screen w-full border border-red-500">
        <div className="flex min-h-screen w-full flex-col items-center justify-center text-black">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg">Welcome to the blog</p>
        </div>
      </header>
      <LayoutSection id="blog-posts">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((blog) => {
            const id = crypto.randomUUID();
            return <BlogCard key={id} blog={blog} />;
          })}
        </section>
        <div>
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
          >
            Next
          </button>
        </div>
      </LayoutSection>
    </>
  );
};
