// imports

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

// snapshot tests

describe("App", () => {
  const validProps = {
    location: {
      city: "Manchester",
      country: "UK",
    },
    forecasts: [
      {
        date: 1111111,
        description: "Stub description 1",
        icon: "stubIcon1",
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 2222222,
        description: "Stub description2",
        icon: "stubIcon2",
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ],
  };

  it("renders correctly", () => {
    render(
      <App forecasts={validProps.forecasts} location={validProps.location} />
    );
    const linkElement = screen.getByText("Manchester, UK");
    expect(linkElement).toBeInTheDocument();
  });
});
