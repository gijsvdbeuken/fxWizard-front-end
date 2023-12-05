import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

test("renders Layout component correctly", () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );

  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});
