import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";
// pass in the props, render as if real life for both
it("renders without crashing", function () {
  render(<Card caption="test" src="test.com" currNum={1} totalNum={1} />);
});

it("matches the snapshot", function () {
  const { container } = render(
  <Card
  caption="test"
  src="test.com"
  currNum={1}
  totalNum={1}
  />);
  expect(container).toMatchSnapshot();
});