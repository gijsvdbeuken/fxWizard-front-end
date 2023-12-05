import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Register from "./Register";

test("renders Register component correctly", () => {
  render(
    <MemoryRouter initialEntries={["/register"]}>
      <Register />
    </MemoryRouter>
  );

  const form = screen.getByRole("form");
  expect(form).toBeInTheDocument();

  const usernameInput = screen.getByLabelText("Username:");
  expect(usernameInput).toBeInTheDocument();

  const passwordInput = screen.getByLabelText("Password:");
  expect(passwordInput).toBeInTheDocument();

  const confirmPasswordInput = screen.getByLabelText("Confirm Password:");
  expect(confirmPasswordInput).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: /sign up/i });
  expect(submitButton).toBeInTheDocument();
});
