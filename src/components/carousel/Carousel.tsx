import { CarouselButtonPrev } from "./CarouselButtonPrev";
import { CarouselButtonNext } from "./CarouselButtonNext";
import { CarouselImage } from "./CarouselImage";
import { CarouselProps } from "../../types/carousel";
import "./carousel.css";
import { useCarouselNavigation } from "../../hooks/useCarouselNavigation";
import { CarouselDotsContainer } from "./CarouselDotsContainer";

export const Carousel = ({ images }: CarouselProps) => {
  const {
    currentImage,
    loading,
    nextImage,
    previousImage,
    setImage,
    setIsHovered,
  } = useCarouselNavigation(images);

  return (
    <article
      className="relative max-h-[100vh] w-full overflow-hidden"
      aria-live="polite"
      onMouseEnter={() => { setIsHovered(true); }}
      onMouseLeave={() => { setIsHovered(false); }}
    >
      {images.length > 0 && (
        <CarouselImage image={images[currentImage]} loading={loading} />
      )}
      <CarouselButtonPrev previousImage={previousImage} />
      <CarouselButtonNext nextImage={nextImage} />
      <CarouselDotsContainer
        images={images}
        currentImage={currentImage}
        setImage={setImage}
      />
    </article>
  );
};
