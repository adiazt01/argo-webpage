import { Globe } from "lucide-react";
import { Link } from "../link/Link";
import { Typography } from "../Typography";
import { Post } from "../../types/Blog";
import { ImageNotFound } from "../../assets";
import { Badge } from "../badge/Badge";

export const BlogCard = ({ blog }: { blog: Post }) => {
  const { title, description, urlToImage, url, tags } = blog;

  return (
    <article className="animation__fade-in--left relative flex flex-col overflow-hidden rounded-t-2xl border border-black/5 shadow-md">
      {urlToImage && (
        <img
          src={urlToImage}
          alt={`Imagen de ${title}`}
          className="h-60 w-full object-cover"
        />
      )}
      {!urlToImage && (
        <img
          src={ImageNotFound}
          alt={`Imagen no encontrada para ${title}`}
          className="h-60 w-full object-cover"
        />
      )}
      <div className="flex min-h-56 flex-col justify-start gap-2 p-4">
        <div className="absolute left-4 top-4 flex flex-row flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={crypto.randomUUID()} color="rose">
              {tag}
            </Badge>
          ))}
        </div>

        <Typography variant="h4">
          {title && title.length > 50 ? `${title.slice(0, 50)}...` : title}
        </Typography>
        <Typography variant="p">
          {description && description.length > 125
            ? `${description.slice(0, 150)}...`
            : description}
          {!description && "No hay descripción disponible"}
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
