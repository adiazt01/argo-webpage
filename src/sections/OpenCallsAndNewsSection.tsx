import { Link } from "react-router-dom";
import { Typography } from "../components/Typography";
import blog from "../mock/blog.json";
import { BlogCard } from "../components/cards/BlogCard";

export const OpenCallsAndNewsSection = () => {
  return (
    <section className="flex min-h-screen flex-col justify-start">
      <header className="flex w-full flex-col gap-8 md:flex-row">
        <div className="flex max-w-lg flex-col gap-2">
          {/* TODO Add text */}
          <Typography className="text-left" variant="h2">
            Que hacemos?
          </Typography>
          <Typography className="text-left" variant="p">
            Calibramos el ecosistema emprendedor de América Latina para crear
            prosperidad inclusiva para el individuo, la empresa, la comunidad y
            el medio ambiente
          </Typography>
        </div>
        <div className="flex w-full flex-row justify-end">
          {/* FIXME add respctiv link to the page */}
          <a href="/login" className="">
            Conocer mas sobre nuestrto programas{" "}
            <Link to="/" className="inline-block" />
          </a>
        </div>
      </header>

      {/* FIXME change this for a call an api REST  */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blog.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </section>
  );
};
