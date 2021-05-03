// imports

import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

// snapshot tests

describe("ForecastSummary", () => {
  const validProps = {
    forecast: {
      date: 1111111,
      description: "Stub description",
      icon: "stubIcon",
      temperature: {
        min: 12,
        max: 22,
      },
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        forecast={validProps.forecast}
        date={validProps.forecast.date}
        description={validProps.forecast.description}
        icon={validProps.forecast.icon}
        temperature={validProps.forecast.temperature}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  // value tests

  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        forecast={validProps.forecast}
        date={validProps.forecast.date}
        description={validProps.forecast.description}
        icon={validProps.forecast.icon}
        temperature={validProps.forecast.temperature}
      />
    );

    expect(getByText("1111111")).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
  });
});
