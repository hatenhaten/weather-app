// imports

import React from "react";
import PropTypes from "prop-types";

// component

// prettier-ignore
const ForecastSummary = ({ forecast }) => {
  const { date, description, icon, temperature } = forecast;

  return ( 
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">{icon}</div>
      <div className="forecast-summary__temperature">{temperature.max}&deg;C</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
};

// prop validation

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
  }).isRequired,
};

// export

export default ForecastSummary;
