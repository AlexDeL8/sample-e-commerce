import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("renders App div", () => {
  render(<App />);
  const appDivElement = screen.getByTestId("app-div");
  expect(appDivElement).toBeInTheDocument(); //
});
