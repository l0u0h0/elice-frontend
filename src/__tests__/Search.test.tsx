import React from "react";
import { render, screen } from "@testing-library/react";
import SearchInputComponent from "../components/search/SearchInputComponent";
import userEvent from "@testing-library/user-event";

describe("<SearchInput />", () => {
  test("Search input Testing", () => {
    render(<SearchInputComponent />);

    const input = screen.getByRole("textbox");

    userEvent.click(input);
    expect(input).toBeCalled();
  });
});
