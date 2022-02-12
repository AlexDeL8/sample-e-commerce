import { cleanup, render, screen } from "@testing-library/react";
import MainNav from "./MainNav.jsx";

afterEach(() => {
  cleanup();
});

test("renders MainNav div", () => {
  render(<MainNav />);
  const headerDivElement = screen.getByTestId("main-nav-div");
  expect(headerDivElement).toBeInTheDocument();
});
