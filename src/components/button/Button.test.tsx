import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Button } from "./Button";

describe("Button", () => {
  it("renders the button text", () => {
    render(
      <MemoryRouter>
        <Button>Click me</Button>
      </MemoryRouter>,
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders the button with the primary variant", () => {
    render(
      <MemoryRouter>
        <Button variant="primary">Click me</Button>
      </MemoryRouter>,
    );

    expect(screen.getByText("Click me")).toHaveClass("flex gap-2 items-center text-white text-1xl font-medium rounded-md shadow bg-rose-600 hover:bg-rose-700 hover:shadow-3xl hover:scale-105 transition-all");
  });
});
