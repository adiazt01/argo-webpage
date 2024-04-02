import { image } from "../../types/carousel";

interface CarouselDotsContainerProps {
  images: image[];
  currentImage: number;
  setImage: (index: number) => void;
}

export const CarouselDotsContainer = ({
  images,
  currentImage,
  setImage,
}: CarouselDotsContainerProps) => {
  return (
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
  );
};
