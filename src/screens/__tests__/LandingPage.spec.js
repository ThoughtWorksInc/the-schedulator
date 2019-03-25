import React from "react";
import { render, cleanup } from "react-testing-library";
import LandingPage from "../LandingPage";

afterEach(cleanup);

test("given no selected day, it will render the entries", () => {
  localStorage.removeItem("selectedLocation");

  const { getByTestId } = render(<LandingPage />);

  expect(getByTestId("landingpage-container")).toBeDefined();
});

test("given First as selected day, it will redirect", async () => {
  localStorage.setItem("selectedLocation", "First");

  const { queryByTestId } = render(<LandingPage />);

  expect(queryByTestId("landingpage-container")).toBeNull();

  // TODO: figure out how to check if Redirect gets called (no reason to test Redirect by itself)
});
