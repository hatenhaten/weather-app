// imports

import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

// snapshot tests

describe("ForecastDetails", () => {
  const validProps = {
    forecast: {
      date: 1525046400000,
      icon: "800",
      temperature: {
        min: 12,
        max: 22,
      },
      wind: {
        speed: 13,
        direction: "s",
      },
      humidity: 30,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails forecast={validProps.forecast} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  // value tests

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails forecast={validProps.forecast} />
    );

    expect(getByText("Mon 30th Apr")).toHaveClass("forecast-details__date");
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-details__icon");
  });
});
