import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event"; // import userEvent library
import Editor from "./Editor";

describe("Editor", () => {
  it("renders the correct content", () => {
    render(
      <MemoryRouter>
        <Editor />
      </MemoryRouter>
    );
    expect(screen.getByText("Editors Page")).toBeInTheDocument();
    expect(
      screen.getByText(
        "On this page, you can edit your own custom fxWizard workflows."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
