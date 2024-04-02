import { Fragment } from "react/jsx-runtime";
import { LayoutSection } from "../../layout/LayoutSection";
import { Typography } from "../../components/Typography";
import { Link } from "lucide-react";
import "../../style/animations/CarouselLogos.css"

export const SponsorsAndFundersSection = () => {
  return (
    <LayoutSection id="sponsors-and-funders-section">
      <header className="flex w-full flex-col gap-8 md:flex-row">
        <div className="flex max-w-lg flex-col gap-2">
          {/* TODO Add text */}
          <Typography className="text-left" variant="h2">
            ¿Qué hacemos?
          </Typography>
          <Typography className="text-left" variant="p">
            Conoce a las organizaciones que nos acompañan por una sociedad más
            inclusiva y en sintonía con el ambiente. <br />
            <br />
            Contáctate para conocer más sobre cómo colaborar con Agora
            Partnerships.
          </Typography>
        </div>
        <div className="flex w-full flex-row justify-end">
          {/* FIXME add respctiv link to the page */}
          <a href="/login" className="">
            Conocer mas sobre nuestrto programas{" "}
            <Link className="inline-block" />
          </a>
        </div>
      </header>
      {/* Logos */}
      <div className="relative mx-auto flex w-full max-w-3xl flex-row flex-nowrap overflow-hidden">
        <div className="absolute bottom-0 left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-white to-transparent"></div>
        <div className="slide-left relative z-10 flex flex-row gap-24 whitespace-nowrap">
          {Array(2)
            .fill(
              <>
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
              </>,
            )
            .map((elements, index) => (
              <Fragment key={index}>{elements}</Fragment>
            ))}
        </div>
      </div>
      <div className="mt-4 max-w-lg">
        <Typography className="text-left" variant="h2">
          Nuestro financiadores
        </Typography>
        <Typography className="text-left" variant="p">
          Conoce a las organizaciones que nos acompañan por una sociedad más inclusiva y en sintonía con el ambiente. <br />
          </Typography>
      </div>
      <div className="relative mx-auto flex w-full max-w-3xl flex-row flex-nowrap overflow-hidden">
        <div className="absolute bottom-0 left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-white to-transparent"></div>
        <div className="slide-right relative z-10 flex flex-row gap-24 whitespace-nowrap">
          {Array(2)
            .fill(
              <>
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block h-32 w-32"
                  alt="Sponsor 2"
                />
              </>,
            )
            .map((elements, index) => (
              <Fragment key={index}>{elements}</Fragment>
            ))}
        </div>
      </div>
    </LayoutSection>
  );
};
