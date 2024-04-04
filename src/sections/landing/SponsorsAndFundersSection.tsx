import { Fragment } from "react/jsx-runtime";
import { LayoutSection } from "../../layout/LayoutSection";
import { Typography } from "../../components/Typography";
import { Link } from "lucide-react";
import "../../style/animations/CarouselLogos.css";
import {
  walmartLogo,
  targetFoundationLogo,
  hipLogo,
  lenderaLogo,
  kueskiLogo,
  mercadoLibreLogo,
  cripCapitalLogo,
  pricesmartLogo,
  newVentureFundLogo,
  cenpromypeLogo,
} from "../../assets";

const sponsors = [
  {
    name: "Cenpromype",
    logo: cenpromypeLogo,
  },
  {
    name: "Crip Capital",
    logo: cripCapitalLogo,
  },
  {
    name: "HIP",
    logo: hipLogo,
  },
  {
    name: "Kueski",
    logo: kueskiLogo,
  },
  {
    name: "Lendera",
    logo: lenderaLogo,
  },
  {
    name: "Mercado Libre",
    logo: mercadoLibreLogo,
  },
  {
    name: "New Venture Fund",
    logo: newVentureFundLogo,
  },
  {
    name: "Price Smart",
    logo: pricesmartLogo,
  },
  {
    name: "Target Foundation",
    logo: targetFoundationLogo,
  },
  {
    name: "Walmart",
    logo: walmartLogo,
  },
];

const funders = [
  {
    name: "Funder 1",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Funder 2",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Funder 3",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Funder 4",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Funder 5",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Funder 6",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Funder 7",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Funder 8",
    logo: "https://via.placeholder.com/150",
  },
];

export const SponsorsAndFundersSection = () => {
  return (
    <LayoutSection id="sponsors-and-funders-section">
      <header className="animation__fade-in--top flex w-full flex-col gap-8 md:flex-row">
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
      <div className="animation__fade-in relative mx-auto flex w-full max-w-3xl flex-row flex-nowrap overflow-hidden">
        <div className="absolute bottom-0 left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute bottom-0 right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-white to-transparent"></div>
        <div className="slide-left relative z-10 flex flex-row gap-24 whitespace-nowrap">

          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.logo}
              className="inline-block h-32 w-32 object-contain"
              loading="lazy"
              alt={sponsor.name}
            />
          ))}
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.logo}
              className="inline-block h-32 w-32 object-contain"
              loading="lazy"
              alt={sponsor.name}
            />
          ))}
        </div>
      </div>
      <div className="animation__fade-in--top mt-12 max-w-lg">
        <Typography className="text-left" variant="h2">
          Nuestro financiadores
        </Typography>
        <Typography className="text-left" variant="p">
          Conoce a las organizaciones que nos acompañan por una sociedad más
          inclusiva y en sintonía con el ambiente. <br />
        </Typography>
      </div>
      <div className="animation__fade-in relative mx-auto flex w-full max-w-3xl flex-row flex-nowrap overflow-hidden">
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
