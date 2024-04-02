import { ArrowBigRight } from "lucide-react";

interface CarouselButtonNextProps {
  nextImage: () => void;
}

export const CarouselButtonNext = ({ nextImage }: CarouselButtonNextProps) => {
  return (
    <button
      className="absolute right-0 top-0 z-10 hidden h-full w-16 scale-105 select-none flex-col items-center justify-center border-2 border-white/20 bg-black/20 bg-opacity-50 to-transparent pe-1 text-5xl text-neutral-300 transition-all hover:bg-black/40 active:translate-x-1 active:bg-black/60 md:flex"
      onClick={nextImage}
      aria-label="Next Image"
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
  );
};
