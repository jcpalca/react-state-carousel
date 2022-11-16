import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
});

it("matches the snapshot", function () {
  const { container } = render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click the left arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  // move backward in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
});
// create new line
it("hides the left arrow on the first image and hides right arrow on last image",
  function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    // expect the left arrow to not show on the first image
    expect(leftArrow).toHaveClass("hidden");
    expect(rightArrow).not.toHaveClass("hidden");

    fireEvent.click(rightArrow);
    expect(leftArrow).not.toHaveClass("hidden");
    expect(rightArrow).not.toHaveClass("hidden");

    fireEvent.click(rightArrow);
    expect(leftArrow).not.toHaveClass("hidden");
    expect(rightArrow).toHaveClass("hidden");
  });