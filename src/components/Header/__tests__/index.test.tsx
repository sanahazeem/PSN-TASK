import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../index";
import { BrowserRouter } from "react-router-dom";

describe("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  test("Should render logo image", () => {
    expect(screen.getAllByRole("img")).toHaveLength(1);
  });
});
