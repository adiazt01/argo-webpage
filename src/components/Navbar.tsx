import { X, Menu, Heart } from "lucide-react";
import { LogoComplete } from "../assets";
import { useState } from "react";
import "../style/Navbar.css";
import { Link } from "./link/Link";
import { useScroll } from "../hooks/useScroll";

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
  const { isScrolling } = useScroll({ setToggle });

  return (
    <header
      id="navbar"
      data-testid="navbar"
      className="fixed top-0 z-50 flex min-h-16 w-full flex-col items-start justify-center bg-white py-4 shadow-lg transition-all"
      style={
        isScrolling
          ? {
              transform: "translateY(-100%)",
              transition: "transform .2s ease-in-out",
            }
          : {
              transform: "translateY(0)",
              transition: "transform .3s ease-in-out",
            }
      }
    >
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between px-8 md:gap-14">
        <div className="flex flex-row gap-12">
          <Link appearance="link" to="/">
            <img src={LogoComplete} alt="Logo" className="h-11" />
          </Link>
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
