import React from "react";
import { render, cleanup } from "react-testing-library";
import LandingPage from "../LandingPage";

afterEach(cleanup);

test("given no selected day, it will render the entries", () => {
  localStorage.removeItem("selectedLocation");

  const { getByTestId } = render(<LandingPage />);

  expect(getByTestId("landingpage-container")).toBeDefined();
});
