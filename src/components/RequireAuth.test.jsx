import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import RequireAuth from "./RequireAuth";

test("renders RequireAuth component correctly", () => {
  render(
    <AuthProvider user={{ name: "user1" }} roles={["admin", "user"]}>
      <MemoryRouter initialEntries={["/some-route"]}>
        <RequireAuth allowedRoles={["admin", "user"]} />
      </MemoryRouter>
    </AuthProvider>
  );

  const outletElement = screen.getByRole("main");
  expect(outletElement).toBeInTheDocument();
});
