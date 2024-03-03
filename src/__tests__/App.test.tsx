import React from "react";
import { render, screen } from "@testing-library/react";
import CoursePage from "../pages/CoursePage";

test("renders learn react link", () => {
  render(<CoursePage />);
  const linkElement = screen.getByText(/과목/i);
  expect(linkElement).toBeInTheDocument();
});
