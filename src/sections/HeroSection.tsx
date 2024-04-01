import { Carousel } from "../components/carousel/Carousel";

const images = [
  {
    imageWallpaper:
      "https://agora2030.org/wp-content/uploads/2024/01/Banner-sitio-web-1-jpg.webp",
    imageTablet:
      "https://agora2030.org/wp-content/uploads/2023/03/Juntas-Contamos-portada-1-768x578.webp",
    imageMobile:
      "https://agora2030.org/wp-content/uploads/2024/01/Banner-cel-1-jpg.webp",
    alt: "Juntas Contamos",
    link: "https://agora2030.org/juntas-contamos/",
  },
  {
    imageWallpaper: "https://placeholder.com/1920x1080",
    imageTablet: "https://placeholder.com/1024x768",
    imageMobile: "https://placeholder.com/480x320",
    alt: "Kitten",
    link: "https://placekitten.com/",
  },
];

export const HeroSection = () => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Carousel images={images}></Carousel>
    </main>
  );
};
