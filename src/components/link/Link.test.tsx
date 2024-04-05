import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { RectangleVertical } from "lucide-react";
import { Link } from "./Link";

describe("Link", () => {
  it("renders the children", () => {
    render(
      <MemoryRouter>
        <Link to="/test">Test</Link>
      </MemoryRouter>,
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders the icon", () => {
    render(
      <MemoryRouter>
        <Link to="/test" icon={<RectangleVertical data-testid="icon" />}>
          Waos
        </Link>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders the variant", () => {
    render(
      <MemoryRouter>
        <Link to="/test" variant="primary">
          Test
        </Link>
      </MemoryRouter>,
    );

    expect(screen.getByText("Test")).toHaveClass("text-white");
  });
});
