import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { RectangleVertical } from "lucide-react";

describe("Typography", () => {
  it("renders the children", () => {
    render(
      <MemoryRouter>
        <Typography variant="p">Test</Typography>
      </MemoryRouter>,
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    render(
      <MemoryRouter>
        <Typography variant="p" icon={<RectangleVertical data-testid="icon" />}>
          Waos
        </Typography>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders the variant", () => {
    render(
      <MemoryRouter>
        <Typography variant="h1">Test</Typography>
      </MemoryRouter>,
    );

    expect(screen.getByText("Test")).toHaveClass("text-4xl");
  });
});
