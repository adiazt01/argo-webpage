import { CarouselDotsProps } from "../../types/carousel";

export const CarouselDots = ({
  images,
  activeIndex,
  setActiveIndex,
}: CarouselDotsProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 md:hidden">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveIndex(index);
          }}
          className={`h-2 w-2 rounded-full bg-white ${
            index === activeIndex ? "opacity-100" : "opacity-50"
          }`}
        ></button>
      ))}
    </div>
  );
};
