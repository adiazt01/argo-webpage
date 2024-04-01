import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AboutUsSection } from "../sections/AboutUsSection";
import { JobOportunnietesSection } from "../sections/JobOportunnietesSection";
import { MetricsSection } from "../sections/MetricsSection";
import { OpenCallsAndNewsSection } from "../sections/OpenCallsAndNewsSection";
import { SponsorsAndFundersSection } from "../sections/SponsorsAndFundersSection";
import { SubscribeNewsletter } from "../sections/SubscribeNewsletter";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <AboutUsSection />
      <OpenCallsAndNewsSection />
      <SponsorsAndFundersSection />
      <MetricsSection />
      <JobOportunnietesSection />
      <SubscribeNewsletter />
      <Footer />
    </>
  );
};
