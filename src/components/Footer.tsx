import { Facebook, Instagram, Link2, Linkedin, Music, Twitter, Youtube } from "lucide-react";
import { LogoComplete } from "../assets";
import { Typography } from "./Typography";
import { Link } from "./link/Link";

export const Footer = () => {
  return (
    <footer className="mt-12 flex w-full flex-col gap-8 border-t bg-white pt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 md:flex-row lg:justify-between px-4">
        <div className="flex flex-col">
          <img src={LogoComplete} className="mx-auto w-48" />
        </div>
        <hr className="w-3/4 mt-4 border-b border-neutral-300/30 block md:hidden" />
        <ul className="flex flex-col text-center lg:text-left">
          <li className="text-lg">
            <Link to="/about" appearance="link" variant="gray">
              Quienes somos
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/programs" appearance="link" variant="gray">
              Programas
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/programs" appearance="link" variant="gray">
              Impacto
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/programs" appearance="link" variant="gray">
              Sumate
            </Link>
          </li>
        </ul>
        <hr className="w-3/4 border-b border-neutral-300/30 block md:hidden" />
        <ul className="flex flex-col text-center lg:text-left">
          <li className="text-lg">
            <Link to="/about" appearance="link" variant="gray">
              Quienes somos
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/programs" appearance="link" variant="gray">
              Programas
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/programs" appearance="link" variant="gray">
              Impacto
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/programs" appearance="link" variant="gray">
              Sumate
            </Link>
          </li>
        </ul>
        <hr className="w-3/4 border-b border-neutral-300/30 block md:hidden" />
        <div className="flex flex-col items-start justify-start">
          <Link
            to="/about"
            icon={<Link2 />}
            iconPosition="right"
            appearance="link"
            variant="primary"
          >
            Suscribete a nuestro newsletter
          </Link>
        </div>
      </div>
      <div className="flex w-full pt-8 items-center bg-neutral-100 px-8 ">
        <div className="mx-auto flex md:flex-row flex-col w-full max-w-6xl justify-between gap-4">
          <div className="w-full">
            <Typography variant="p" className=" max-w-lg text-center mx-auto lg:mx-0">
              <small>
                <strong>Agora Partnerships</strong>® All Rights Reserved.Reg.
                U.S. Pat. and TM Off{" "}
                <a
                  href="https://agorapartnerships.org"
                  className="block font-medium text-rose-800"
                >
                  Politica de Privacidad
                </a>
              </small>
            </Typography>
          </div>
          <ul className="flex flex-row items-center justify-center lg:justify-between gap-4">
            <li>
              <Link to="https://facebook.com" appearance="link" variant="gray">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link to="https://facebook.com" appearance="link" variant="gray">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link to="https://facebook.com" appearance="link" variant="gray">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link to="https://facebook.com" appearance="link" variant="gray">
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link to="https://facebook.com" appearance="link" variant="gray">
                <Music />
              </Link>
            </li>
            <li>
              <Link to="https://facebook.com" appearance="link" variant="gray">
                <Youtube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
