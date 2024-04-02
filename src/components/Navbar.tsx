import { X, Menu, Heart } from "lucide-react";
import { Logo } from "../assets";
import { useEffect, useState } from "react";
import "../style/Navbar.css";
import { Link } from "./link/Link";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {}, [toggle]);

  // TODO add active class to the current page
  // TODO add a dropdown menu for the user in responsive mode
  // TODO add the link const with the links to the pages

  return (
    <header
      id="navbar"
      data-testid="navbar"
      className="fixed top-0 z-50 flex min-h-16 w-full flex-col items-start justify-center bg-white py-4 shadow-lg transition-all"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between px-8">
        {/* TODO add logo link and href with Link react-router-dom component */}
        <div className="flex flex-row gap-12">
          <a href="/">
            <img src={Logo} alt="Logo" className="h-8" />
          </a>
          <Link
            to={"/"}
            variant="primary"
            icon={<Heart />}
            size="small"
            iconPosition="right"
          >
            Donate
          </Link>
        </div>
        <nav className="flex items-center justify-center">
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      {/* TODO add animations and transitions */}
      {toggle && (
        <div className="sticky top-16 flex w-full flex-col items-center justify-center gap-4 py-5">
          <a href="/about" className="text-lg">
            About
          </a>
          <a href="/contact" className="text-lg">
            Contact
          </a>
          <a href="/donate" className="text-lg">
            Donate
          </a>
        </div>
      )}
    </header>
  );
};
