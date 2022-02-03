import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App div", () => {
  render(<App />);
  const appDivElement = screen.getByTestId("app-div");
  expect(appDivElement).toBeInTheDocument(); //
});
