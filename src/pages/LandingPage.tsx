import { Link } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Typography } from "../components/Typography";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* TODO Add carousel in responsive design */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-100"></main>
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-8 bg-neutral-100 px-6">
        <div className="flex flex-row flex-wrap gap-8">
          <div className="flex flex-col gap-2">
            {/* FIXME Add text */}
            <Typography className="text-left" variant="h2">
              Que hacemos?
            </Typography>
            <Typography className="text-left" variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
          <div className="flex w-full flex-row justify-end">
            {/* TODO change icon and view and create components */}
            <a href="/login" className="">
              Conocer mas sobre nuestrto programas{" "}
              <Link className="inline-block" />
            </a>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <article className="relative flex flex-col gap-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Programa 1"
                className="h-80 w-full rounded-lg object-cover"
              />
              <Typography variant="h4" className="mt-4">
                Programa 1
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio facilis dicta unde reiciendis autem, velit aspernatur
                voluptate nesciunt, eos sint illum modi molestias optio.
                Laboriosam aliquid facilis voluptates unde placeat.
              </Typography>
            </article>
          </li>
          <li>
            <article className="relative flex flex-col gap-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Programa 1"
                className="h-80 w-full rounded-lg object-cover"
              />
              <Typography variant="h4" className="mt-4">
                Programa 1
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio facilis dicta unde reiciendis autem, velit aspernatur
                voluptate nesciunt, eos sint illum modi molestias optio.
                Laboriosam aliquid facilis voluptates unde placeat.
              </Typography>
            </article>
          </li>
          <li>
            <article className="relative flex flex-col gap-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Programa 1"
                className="h-80 w-full rounded-lg object-cover"
              />
              <Typography variant="h4" className="mt-4">
                Programa 1
              </Typography>
              <Typography variant="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio facilis dicta unde reiciendis autem, velit aspernatur
                voluptate nesciunt, eos sint illum modi molestias optio.
                Laboriosam aliquid facilis voluptates unde placeat.
              </Typography>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};
