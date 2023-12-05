import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";

test("renders Login component correctly", () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  const signInElements = screen.getAllByText("Sign In");
  expect(signInElements.length).toBeGreaterThan(0);

  const usernameLabel = screen.getByLabelText("Username:");
  expect(usernameLabel).toBeInTheDocument();

  const passwordLabel = screen.getByLabelText("Password:");
  expect(passwordLabel).toBeInTheDocument();
});
