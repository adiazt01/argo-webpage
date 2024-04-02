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
    setCurrentImage(
      (currentImage) => (currentImage - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const setImage = useCallback((index: number) => {
    setCurrentImage((currentImage) => {
      if (index === currentImage) return currentImage;
      setLoading(true);
      return index;
    });
  }, []);

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
