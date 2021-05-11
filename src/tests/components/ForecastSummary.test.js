// imports

import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

// snapshot tests

describe("ForecastSummary", () => {
  const validProps = {
    forecast: {
      date: 1525046400000,
      description: "Stub description",
      icon: "800",
      temperature: {
        min: 12,
        max: 22,
      },
    },
    onSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        forecast={validProps.forecast}
        onSelect={validProps.onSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  // value tests

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        forecast={validProps.forecast}
        onSelect={validProps.onSelect}
      />
    );

    expect(getByText("Mon 30th Apr")).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });
});
