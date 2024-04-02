export interface image {
  imageWallpaper: string;
  imageMobile: string;
  imageTablet: string;
  alt: string;
  link: string;
}

export interface CarouselProps {
  images: image[];
}

interface CarouselDotsProps {
  images: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
