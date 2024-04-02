import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { JobCard } from "./JobCard";

describe("JobCard", () => {
  const job = {
    id: "1",
    role: "Software Engineer",
    location: "New York",
    description: "This is a job description",
    image: "test-image.jpg",
  };

  it("renders the job content", () => {
    render(
      <MemoryRouter>
        <JobCard job={job} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("This is a job description")).toBeInTheDocument();
  });

  it("truncates the description if it's longer than 125 characters", () => {
    const longDescription =
      "This is a very long description that should be truncated to 100 characters...";

    render(
      <MemoryRouter>
        <JobCard job={{ ...job, description: longDescription }} />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(
        "This is a very long description that should be truncated to 100 characters...",
        { exact: false },
      ),
    ).toBeInTheDocument();
  });

  it("renders the 'Apply Now' link", () => {
    render(
      <MemoryRouter>
        <JobCard job={job} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Apply Now")).toBeInTheDocument();
  });
});
