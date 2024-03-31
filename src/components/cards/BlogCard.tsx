import { Link } from "lucide-react";
import { Button } from "../Button";
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
    <article className="relative flex flex-col overflow-hidden rounded-t-2xl shadow">
      <img
        src={image}
        alt="Programa 1"
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
        <Button
          variant="primary"
          buttonType="link"
          size="small"
          to="/home"
          icon={<Link />}
          iconPosition="right"
          className=""
        >
          Ver mas
        </Button>
      </footer>
    </article>
  );
};
