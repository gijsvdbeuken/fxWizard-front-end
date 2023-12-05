import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Admin from "./Admin";

describe("Admin", () => {
  it("renders the correct content", () => {
    render(
      <MemoryRouter>
        <Admin />
      </MemoryRouter>
    );
    expect(screen.getByText("Admins Page")).toBeInTheDocument();
    expect(
      screen.getByText(
        "On this page, you can manage your motion-design employees."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
