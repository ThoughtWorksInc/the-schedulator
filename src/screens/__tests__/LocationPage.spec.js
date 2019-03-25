import React from "react";
import { render, cleanup } from "react-testing-library";
import LocationPage from "../LocationPage";
import API from "../../Api";

jest.mock("../../Api");

afterEach(() => {
  cleanup();
  API.getScheduleForDay.mockRestore();
});

test("renders the header", () => {
  API.getScheduleForDay.mockReturnValue([]);
  const { getByTestId } = render(<LocationPage day="First" />);

  expect(getByTestId("header")).toBeDefined();
});

test("renders 1 talk with no break", () => {
  API.getScheduleForDay.mockReturnValue([
    {
      time: "09:45",
      title: "Keynote: Building Evolutionary Architectures",
      abstract:
        "For many years, software architecture was described as 'the parts that are hard to change later'. But then microservices showed that if architects build evolvability into the architecture, change becomes easier. This talk, based on the recently published book Building Evolutionary Architectures co-authored by Rebecca anf Neal Ford, investigates how to build evolvable systems. The software development ecosystem exists in a state of dynamic equilibrium, where any new tool, framework or technique leads to disruption and the establishment of a new equilibrium.",
      type: "talk",
      speaker: {
        name: "Rebecca Parsons",
        bio:
          "Dr. Rebecca Parsons has decades-long applications development experience across a range of industries and systems. Her technical experience includes leading the creation of large-scale distributed object applications and the integration of disparate systems. Separate from her passion for deep technology, Dr. Parsons is a strong advocate for diversity in the techn industry. Committed to increasing the number of women in coding and STEM fields, Dr. Parsons served on the board of CodeChix and acted as an advisor to Women Who Code.",
        img: "https://robohash.org/YOUR-TEXT.png?size=150x150&set=set3",
        homepage: undefined,
        twitter: "john"
      },
      track: "track 1"
    }
  ]);
  const { getByTestId, queryByTestId } = render(<LocationPage day="First" />);

  expect(getByTestId("header")).toBeDefined();
  expect(getByTestId("talk-list-item")).toBeDefined();
  expect(queryByTestId("break-list-item")).toBeNull();
});

test("renders a break", () => {
  API.getScheduleForDay.mockReturnValue([
    {
      title: "Break",
      time: "09:50",
      type: "break"
    }
  ]);
  const { getByTestId, queryByTestId } = render(<LocationPage day="First" />);

  expect(getByTestId("header")).toBeDefined();
  expect(getByTestId("break-list-item")).toBeDefined();
  expect(queryByTestId("talk-list-item")).toBeNull();
});
