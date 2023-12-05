import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Lounge from "./Lounge";

describe("Lounge", () => {
  it("renders the correct content", () => {
    render(
      <MemoryRouter>
        <Lounge />
      </MemoryRouter>
    );
    expect(screen.getByText("The Lounge")).toBeInTheDocument();
    expect(
      screen.getByText("Admins and Motion-designers can hang out here.")
    ).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
