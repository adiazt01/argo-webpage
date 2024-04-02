interface CarouselDotProps {
  index: number;
  currentImage: number;
  setImage: (index: number) => void;
}

export const CarouselDot = ({
  index,
  currentImage,
  setImage,
}: CarouselDotProps) => {
  return (
    <button
      key={index}
      onClick={() => {
        setImage(index);
      }}
      className={`h-2 w-2 rounded-full ${currentImage === index ? "bg-white" : "bg-gray-500"}`}
    />
  );
};
