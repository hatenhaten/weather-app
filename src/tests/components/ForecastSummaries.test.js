// imports

import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

// snapshot tests

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1525046400000,
        description: "Stub description 1",
        icon: "800",
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 1525132800000,
        description: "Stub description2",
        icon: "602",
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ],
    onForecastSelect: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
        u
      />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});

// list testing
