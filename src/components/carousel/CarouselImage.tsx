import { image } from "../../types/carousel";

interface CarouselImageProps {
  image: image;
  loading: boolean;
}

export const CarouselImage = ({ image, loading }: CarouselImageProps) => {
  return (
    <a href={image.link} >
      <picture>
        <source media="(max-width: 768px)" srcSet={image.imageMobile} />
        <source
          media="(min-width: 769px) and (max-width: 1024px)"
          srcSet={image.imageTablet}
        />
        <source media="(min-width: 1025px)" srcSet={image.imageWallpaper} />
        <img
          src={image.imageWallpaper}
          alt={image.alt}
          className={`duration-800 h-[75vh] w-full object-fill transition-all duration-100 ${loading ? "opacity-0 blur" : "opacity-100"}`}
        />
      </picture>
    </a>
  );
};
