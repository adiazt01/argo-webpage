import { HeroImageMd, HeroImageSm, HeroImageXl } from "../../assets";
import { Carousel } from "../../components/carousel/Carousel";

const images = [
  {
    imageWallpaper: HeroImageXl,
    imageTablet: HeroImageMd,
    imageMobile: HeroImageSm,
    alt: "Juntas Contamos",
    link: "https://agora2030.org/",
  },
  {
    imageWallpaper: HeroImageXl,
    imageTablet: HeroImageMd,
    imageMobile: HeroImageSm,
    alt: "Juntas Contamos",
    link: "https://agora2030.org/",
  },
];

export const HeroSection = () => {
  return (
    <main id="hero-section" data-testid="hero-section" className="flex w-full flex-col">
      <Carousel images={images}></Carousel>
    </main>
  );
};
