import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(<Card />);
});

it("matches the snapshot", function () {
  const { container } = render(<Card />);
  expect(container).toMatchSnapshot();
});