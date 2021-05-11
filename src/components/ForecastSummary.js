// imports

import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

// component

// prettier-ignore
const ForecastSummary = ({ forecast, onSelect }) => {
  const { date, description, icon, temperature } = forecast;

  return ( 
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__description">
        {description}
      </div> 
      <button type="button" onClick={() => onSelect(date)}>More details</button>
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
  onSelect: PropTypes.func.isRequired,
};

// export

export default ForecastSummary;
