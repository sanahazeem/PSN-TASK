import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../index";

describe("renders learn react link", () => {
  render(<Header />);
  test("Should render logo image", () => {
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });
});
