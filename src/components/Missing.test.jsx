import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Missing from "./Missing";

test("renders Outlet component correctly", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Missing />
    </MemoryRouter>
  );

  const outletElement = screen.getByRole("main");
  expect(outletElement).toBeInTheDocument();
});
