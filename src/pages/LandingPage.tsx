import { LayoutPage } from "../layout/LayoutPage";
import { AboutUsSection } from "../sections/landing/AboutUsSection";
import { HeroSection } from "../sections/landing/HeroSection";
import { JobOportunnietesSection } from "../sections/landing/JobOportunnietesSection";
import { MetricsSection } from "../sections/landing/MetricsSection";
import { OpenCallsAndNewsSection } from "../sections/landing/OpenCallsAndNewsSection";
import { SponsorsAndFundersSection } from "../sections/landing/SponsorsAndFundersSection";
import { SubscribeNewsletter } from "../sections/landing/SubscribeNewsletter";

export const LandingPage = () => {
  window.scrollTo(0, 0)

  return (
    <LayoutPage>
      <HeroSection />
      <AboutUsSection />
      <OpenCallsAndNewsSection />
      <SponsorsAndFundersSection />
      <MetricsSection />
      <JobOportunnietesSection />
      <SubscribeNewsletter />
    </LayoutPage>
  );
};
