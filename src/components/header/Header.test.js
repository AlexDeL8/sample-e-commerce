import { render, screen } from "@testing-library/react";
import Header from "./Header.js";

test("renders Header div", () => {
  render(<Header />);
  const headerDivElement = screen.getByTestId("header-div");
  expect(headerDivElement).toBeInTheDocument();
});

test("renders SearchNav", () => {
  render(<Header />);
  const headerDivElement = screen.getByTestId("header-div");
  expect(headerDivElement).toBeInTheDocument(); //NEED TO CHECK IF HTML ELEMENT EXISTS can work for React Components
});
