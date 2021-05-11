// imports

import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

// prettier-ignore
const ForecastSummaries = ({ forecasts, onForecastSelect }) => {
    return (
        <div className="forecast-summaries">
            {forecasts.map((forecast) => (
                <ForecastSummary
                  key={forecast.date.toString()}
                  forecast={forecast}
                  onSelect={onForecastSelect}
                />
            ))};
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
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummaries;
