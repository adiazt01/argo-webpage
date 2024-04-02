import { X, Menu, Heart } from "lucide-react";
import { LogoComplete } from "../assets";
import { useEffect, useState } from "react";
import "../style/Navbar.css";
import { Link } from "./link/Link";

const LinksSite = [
  {
    name: "Quienes somos",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos !== scrollPos) {
        setScrollPos(currentScrollPos);
      }

      if (currentScrollPos > scrollPos) {
        setIsScrolling(true);
      } else if (currentScrollPos < scrollPos) {
        setIsScrolling(false);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  // TODO add active class to the current page
  // TODO add the link const with the links to the pages

  return (
    <header
      id="navbar"
      data-testid="navbar"
      className="fixed top-0 z-50 flex min-h-16 w-full flex-col items-start justify-center bg-white py-4 shadow-lg transition-all"
      style={
        isScrolling
          ? {
              transform: "translateY(-100%)",
              transition: "transform .3s ease-in-out",
            }
          : {
              transform: "translateY(0)",
              transition: "transform .3s ease-in-out",
            }
      }
    >
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between px-8 md:gap-14">
        {/* TODO add logo link and href with Link react-router-dom component */}
        <div className="flex flex-row gap-12">
          <a href="/">
            <img src={LogoComplete} alt="Logo" className="h-11" />
          </a>
        </div>
        <nav className="hidden items-center justify-center gap-5 md:flex">
          {LinksSite.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              appearance="link"
              variant="gray"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="ms-auto hidden gap-5 md:flex">
          <Link
            to="/donate"
            appearance="button"
            icon={<Heart />}
            variant="primary"
            size="small"
          >
            Donar
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* TODO add animations and transitions */}
      {toggle && (
        <div className="sticky top-16 flex w-full flex-col items-center justify-center gap-4 py-5 md:hidden">
          {LinksSite.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              appearance="link"
              variant="gray"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/donate"
            appearance="button"
            icon={<Heart />}
            variant="primary"
            size="small"
          >
            Donar
          </Link>
        </div>
      )}
    </header>
  );
};
