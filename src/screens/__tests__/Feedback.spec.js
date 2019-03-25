import React from "react";
import { render, cleanup } from "react-testing-library";
import Feedback from "../Feedback";

afterEach(cleanup);

test("renders the iframe with the map", () => {
  const { getByTestId } = render(<Feedback />);

  expect(getByTestId("google-feedback-container")).toBeDefined();
});
