import { Navbar } from "../components/Navbar";
import { AboutUsSection } from "../sections/AboutUsSection";
import { OpenCallsAndNewsSection } from "../sections/OpenCallsAndNewsSection";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* TODO Add carousel in responsive design */}
      <AboutUsSection />
      <OpenCallsAndNewsSection />
    </>
  );
};
