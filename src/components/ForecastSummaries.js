// imports

import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

// prettier-ignore
const ForecastSummaries = ({ forecasts }) => {
    return (
        <div className="forecast-summaries">
            {forecasts.map((forecast) => (
                    <ForecastSummary
                    key={forecast.date.toString()}
                    date={forecast.date}
                    description={forecast.description}
                    icon={forecast.icon}
                    temperature={forecast.temperature}
                    forecast={forecast}
                />
            ))}
        </div>
    );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default ForecastSummaries;
