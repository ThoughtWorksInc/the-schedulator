import React from "react";
import { render, cleanup } from "react-testing-library";
import Venue from "../Venue";

afterEach(cleanup);

test("renders the iframe with the map", () => {
  const { getByTestId } = render(<Venue />);

  expect(getByTestId("venue-container")).toBeDefined();
  expect(getByTestId("map-iframe")).toBeDefined();
});
