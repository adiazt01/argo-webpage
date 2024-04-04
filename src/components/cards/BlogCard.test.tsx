import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BlogCard } from "./BlogCard";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("BlogCard", () => {
  const blog = {
    title: "Test Blog",
    description: "This is a test blog",
    urlToImage: "https://example.com/image.jpg",
    url: "/blog/1",
    id: "1",
  };

  it("renders the blog content", () => {
    render(
      <MemoryRouter>
        <BlogCard blog={blog} />
      </MemoryRouter>,
    );

    expect(screen.getByText("This is a test blog")).toBeInTheDocument();
    expect(screen.getByText("Test Blog")).toBeInTheDocument();
    expect(screen.getByText("Ver mas")).toBeInTheDocument();
    expect(screen.getByAltText("image of Test Blog")).toBeInTheDocument();
  });

  it("truncates the description if it's longer than 125 characters", () => {
    render(
      <MemoryRouter>
        <BlogCard
          blog={{
            ...blog,
            description:
              "This is a very long description that should be truncated to 100 characters...",
          }}
        />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(
        "This is a very long description that should be truncated to 100 characters...",
        { exact: false },
      ),
    ).toBeInTheDocument();
  });
});
