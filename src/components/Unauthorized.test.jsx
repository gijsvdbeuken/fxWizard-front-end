import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Unauthorized from "./Unauthorized";

test("renders Unauthorized component correctly", () => {
  render(
    <MemoryRouter initialEntries={["/unauthorized"]}>
      <Unauthorized />
    </MemoryRouter>
  );

  const unauthorizedHeading = screen.getByRole("heading", {
    name: /unauthorized/i,
  });
  expect(unauthorizedHeading).toBeInTheDocument();

  const unauthorizedMessage = screen.getByText(/you do not have access/i);
  expect(unauthorizedMessage).toBeInTheDocument();

  const goBackButton = screen.getByRole("button", { name: /go back/i });
  expect(goBackButton).toBeInTheDocument();
});
