import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LinkPage from "./LinkPage";

describe("LinkPage", () => {
  it("renders the correct content", () => {
    render(
      <MemoryRouter>
        <LinkPage />
      </MemoryRouter>
    );
    expect(screen.getByText("Links")).toBeInTheDocument();
    expect(screen.getByText("Public")).toBeInTheDocument();
    expect(screen.getByText("Private")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Editors Page")).toBeInTheDocument();
    expect(screen.getByText("Admin Page")).toBeInTheDocument();
  });
});
