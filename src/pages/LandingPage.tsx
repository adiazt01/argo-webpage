import { Navbar } from "../components/Navbar";
import { AboutUsSection } from "../sections/AboutUsSection";
import { OpenCallsAndNewsSection } from "../sections/OpenCallsAndNewsSection";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* TODO Add carousel in responsive design */}
      <main className="flex min-h-screen flex-col items-center justify-center "></main>
      <AboutUsSection />
      <OpenCallsAndNewsSection />
    </>
  );
};
