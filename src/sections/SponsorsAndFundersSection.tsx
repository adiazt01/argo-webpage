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
      <div className="flex w-full flex-row flex-nowrap gap-8 overflow-hidden">
        {/* Logos slide */}
        <div className="slide whitespace-nowrap">
          {Array(2)
            .fill(
              <>
                <img
                  src="https://via.placeholder.com/150"
                  className="inline-block mx-10 h-32 w-32"
                  alt="Sponsor 1"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className="inline-block mx-10 h-32"
                  alt="Sponsor 2"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block mx-10 h-32 w-32"
                  alt="Sponsor 3"
                />
                <img
                  src="https://via.placeholder.com/150"
                  className=" inline-block mx-10 h-32"
                  alt="Sponsor 4"
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
