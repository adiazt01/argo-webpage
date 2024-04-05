import { LayoutPage } from "../layout/LayoutPage";
import { HeroSection } from "../sections/blog/HeroSection";
import { PostsSection } from "../sections/blog/PostsSection";

export const BlogPage = () => {
  window.scrollTo(0, 0);

  return (
    <LayoutPage>
      <HeroSection />
      <PostsSection />
    </LayoutPage>
  );
};
