import { LayoutPage } from "../layout/LayoutPage"
import { HeroSection } from "../sections/blog/HeroSection"

export const BlogPage = () => {
  window.scrollTo(0, 0)

  return (
    <LayoutPage>
        <HeroSection />
    </LayoutPage>
  )
}