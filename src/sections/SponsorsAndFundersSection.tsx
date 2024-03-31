import { Fragment } from "react/jsx-runtime";
import { LayoutSection } from "../layout/LayoutSection";
import "../style/animations/CarouselLogos.css";

export const SponsorsAndFundersSection = () => {
  return (
    <LayoutSection>
      <h2>Sponsors and Funders</h2>
      <p>
        Our work is made possible by the generous support of our sponsors and
        funders.
      </p>
      {/* Logos */}
      <div className="relative mx-auto flex w-full max-w-3xl flex-row flex-nowrap overflow-hidden">
        <div className="z-20 absolute bottom-0 left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent"></div>
        <div className="z-20 absolute bottom-0 right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent"></div>
        <div className="z-10 slide relative flex flex-row gap-24 whitespace-nowrap">
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
