import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LandingPage } from "./LandingPage";
import { MemoryRouter } from "react-router-dom";

describe("LandingPage", () => {
  it("renders all main sections", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("about-us-section")).toBeInTheDocument();
    expect(
      screen.getByTestId("open-calls-and-news-section"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("sponsors-and-funders-section"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("metrics-section")).toBeInTheDocument();
    expect(screen.getByTestId("job-opportunities-section")).toBeInTheDocument();
    expect(screen.getByTestId("subscribe-newsletter")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
