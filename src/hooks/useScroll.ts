import { useEffect, useState } from "react";

interface UseScrollProps {
  toggle?: boolean;
  setToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useScroll = ({ setToggle }: UseScrollProps) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos !== scrollPos) {
        setScrollPos(currentScrollPos);
      }

      if (currentScrollPos > scrollPos) {
        setIsScrolling(true);
        if (setToggle) {
          setToggle(false);
        }
      } else if (currentScrollPos < scrollPos) {
        setIsScrolling(false);
      }

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
  }, [scrollPos, setToggle]);

  return {
    isScrolling,
  };
};
