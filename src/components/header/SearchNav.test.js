import { cleanup, render, screen } from "@testing-library/react";
import SearchNav from "./SearchNav.js";

afterEach(() => {
  cleanup();
});

test("renders SearchNav div", () => {
  render(<SearchNav />);
  const headerDivElement = screen.getByTestId("search-nav-div");
  expect(headerDivElement).toBeInTheDocument();
});
