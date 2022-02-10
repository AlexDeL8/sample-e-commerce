import { cleanup, render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

afterEach(() => {
  cleanup();
});

test("renders Header div", () => {
  render(<Header />);
  const headerDivElement = screen.getByTestId("header-div");
  expect(headerDivElement).toBeInTheDocument();
});
