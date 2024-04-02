import { CarouselDots } from './CarouselDots';
import { CarouselButtonPrev } from "./CarouselButtonPrev";
import { CarouselButtonNext } from "./CarouselButtonNext";
import { useEffect, useState } from "react";
import "./carousel.css";
import { CarouselProps } from "../../types/carousel";
import { CarouselImage } from "./CarouselImage";

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
    }, 300);
  };

  const previousImage = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    }, 300);
  };

  const setImage = (index: number) => {
    if (index === currentImage) return;
    setLoading(true);
    setTimeout(() => {
      setCurrentImage(index);
    }, 300);
  };

  return (
    <article
      className="relative max-h-[100vh] w-full overflow-hidden"
      aria-live="polite"
    >
      {images.length > 0 && (
        <CarouselImage image={images[currentImage]} loading={loading} />
      )}
      <CarouselButtonPrev previousImage={previousImage} />
      <CarouselButtonNext nextImage={nextImage} />
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
    </article>
  );
};
