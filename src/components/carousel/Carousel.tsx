import { useEffect, useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./carousel.css";

interface image {
  imageWallpaper: string;
  imageMobile: string;
  imageTablet: string;
  alt: string;
  link: string;
}

interface CarouselProps {
  images: image[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const img = new Image();
    img.src = images[currentImage].imageWallpaper;
    img.onload = () => {
      setLoading(false);
    };
  }, [currentImage, images]);

  const nextImage = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 700);
  };

  const previousImage = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    }, 100);
  };

  const setImage = (index: number) => {
    if (index === currentImage) return;
    setLoading(true);
    setTimeout(() => {
      setCurrentImage(index);
    }, 100);
  };

  console.log(images[currentImage]);

  return (
    <div className="relative max-h-[100vh] w-full overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
        </div>
      )}
      {images.length > 0 && (
        <a href={images[currentImage].link}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={images[currentImage].imageMobile}
            />
            <source
              media="(min-width: 769px) and (max-width: 1024px)"
              srcSet={images[currentImage].imageTablet}
            />
            <source
              media="(min-width: 1025px)"
              srcSet={images[currentImage].imageWallpaper}
            />
            <img
              src={images[currentImage].imageWallpaper}
              alt={images[currentImage].alt}
              className={`duration-800 h-[75vh] w-full object-fill transition-all duration-100 ${loading ? "opacity-0 blur" : "opacity-100"}`}
            />
          </picture>
        </a>
      )}
      <button
        className="absolute left-0 top-0 z-10 hidden h-full w-16 scale-105 select-none flex-col items-center justify-center border-2 border-white/20 bg-black/20 bg-opacity-50 to-transparent pe-1 text-5xl text-neutral-300 transition-all hover:bg-black/40 active:-translate-x-1 active:bg-black/60 md:flex"
        onClick={previousImage}
      >
        <ArrowBigLeft
          style={{
            width: "1em",
            height: "1em",
            strokeWidth: "1.5",
            stroke: "currentColor",
          }}
        />
      </button>
      <button
        className="absolute right-0 top-0 z-10 hidden h-full w-16 scale-105 select-none flex-col items-center justify-center border-2 border-white/20 bg-black/20 bg-opacity-50 to-transparent pe-1 text-5xl text-neutral-300 transition-all hover:bg-black/40 active:translate-x-1 active:bg-black/60 md:flex"
        onClick={nextImage}
      >
        <ArrowBigRight
          style={{
            width: "1em",
            height: "1em",
            strokeWidth: "1.5",
            stroke: "currentColor",
          }}
        />
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 md:hidden">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setImage(index);
            }}
            className={`h-2 w-2 rounded-full ${currentImage === index ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
};
