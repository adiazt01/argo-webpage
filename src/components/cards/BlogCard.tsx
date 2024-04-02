import { Globe } from "lucide-react";
import { Link } from "../link/Link";
import { Typography } from "../Typography";
import { Post } from "../../types/Blog";

export const BlogCard = ({ blog }: { blog: Post }) => {
  const { title, description, urlToImage, url } = blog;

  return (
    <article className="relative flex flex-col justify-between overflow-hidden rounded-t-2xl border border-black/5 shadow-md">
      <img
        src={urlToImage}
        alt={`image of ${title}`}
        className="h-80 w-full rounded-b-2xl object-cover"
        loading="lazy"
      />
      <div className="flex min-h-56 flex-col gap-2 p-4">
        <Typography variant="h4">
          {title.length > 50 ? `${title.slice(0, 50)}...` : title}
        </Typography>
        <Typography variant="p">
          {description.length > 125
            ? `${description.slice(0, 150)}...`
            : description}
        </Typography>
      </div>
      <footer className="flex justify-end px-4 pb-4">
        <Link
          variant="primary"
          size="medium"
          to={url}
          icon={<Globe />}
          iconPosition="right"
        >
          Continuar leyendo
        </Link>
      </footer>
    </article>
  );
};
