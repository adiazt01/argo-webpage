import { Link as LinkIcon } from "lucide-react";
import { Link } from "../link/Link";
import { Typography } from "../Typography";

interface BlogCardProps {
  blog: {
    title: string;
    description: string;
    image: string;
    id: string;
  };
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const { title, description, image } = blog;

  return (
    <article className="relative flex flex-col overflow-hidden rounded-t-2xl border border-black/5 shadow-md">
      <img
        src={image}
        alt={`image of ${title}`}
        className="h-80 w-full rounded-b-2xl object-cover"
      />
      <div className="flex min-h-56 flex-col gap-2 p-4">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p">
          {description.length > 125
            ? `${description.slice(0, 100)}...`
            : description}
        </Typography>
      </div>
      <footer className="flex justify-end px-4 pb-4">
        <Link
          variant="primary"
          size="small"
          to={`/blog/${blog.id}`}
          icon={<LinkIcon />}
          iconPosition="right"
        >
          Ver mas
        </Link>
      </footer>
    </article>
  );
};
