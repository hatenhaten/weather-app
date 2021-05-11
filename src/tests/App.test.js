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
        icon: "800",
        temperature: {
          max: 22,
          min: 12,
        },
        wind: {
          speed: 13,
          direction: "s",
        },
        humidity: 30,
      },
      {
        date: 2222222,
        description: "Stub description2",
        icon: "800",
        temperature: {
          max: 24,
          min: 13,
        },
        wind: {
          speed: 16,
          direction: "nw",
        },
        humidity: 50,
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
