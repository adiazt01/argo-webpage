import { CarouselButtonPrev } from "./CarouselButtonPrev";
import { CarouselButtonNext } from "./CarouselButtonNext";
import { CarouselImage } from "./CarouselImage";
import { CarouselProps } from "../../types/carousel";
import "./carousel.css";
import { useCarouselNavigation } from "../../hooks/useCarouselNavigation";

export const Carousel = ({ images }: CarouselProps) => {
  const { currentImage, loading, nextImage, previousImage, setImage } = useCarouselNavigation(images);

  console.log(currentImage);
  console.log(images[currentImage]);

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
