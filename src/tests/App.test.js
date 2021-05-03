// imports

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

// snapshot tests

describe("App", () => {
  it("renders correctly", () => {
    render(<App />);
    const linkElement = screen.getByText("Weather App");
    expect(linkElement).toBeInTheDocument();
  });
});
