import { useCallback, useEffect, useState } from "react";
import { image } from "../types/carousel";

export const useCarouselNavigation = (images: image[]) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = useCallback(() => {
    setLoading(true);
    setCurrentImage((currentImage) => (currentImage + 1) % images.length);
  }, [images.length]);

  const previousImage = useCallback(() => {
    setLoading(true);
    setCurrentImage((currentImage) => (currentImage - 1 + images.length) % images.length);
  }, [images.length]);

  const setImage = useCallback((index: number) => {
    setLoading(true);
    setCurrentImage((currentImage) => {
      if (index === currentImage) return currentImage;
      return index;
    });
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = images[currentImage].imageWallpaper;
    img.onload = () => {
      setLoading(false);
    };
  }, [currentImage, images]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        nextImage();
      }
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [isHovered, nextImage]);

  return {
    currentImage,
    nextImage,
    previousImage,
    setImage,
    loading,
    setIsHovered,
  };
};
