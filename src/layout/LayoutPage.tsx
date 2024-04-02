import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};