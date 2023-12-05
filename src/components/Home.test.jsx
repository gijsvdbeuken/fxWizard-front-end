import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import Home from "./Home";
import { vi } from "vitest";

test("renders Home component", async () => {
  const setAuth = vi.fn();

  const AuthProvider = ({ children }) => {
    return (
      <AuthContext.Provider value={{ setAuth }}>
        {children}
      </AuthContext.Provider>
    );
  };

  render(
    <AuthProvider>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </AuthProvider>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("You are logged in!")).toBeInTheDocument();

  const signOutButton = screen.getByText("Sign Out");
  userEvent.click(signOutButton);

  await waitFor(() => expect(setAuth).toHaveBeenCalled());
});
