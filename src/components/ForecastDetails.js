// imports

import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";

// component

// prettier-ignore
const ForecastDetails = ({ forecast }) => {
    const { date, icon, temperature, humidity, wind } = forecast;

    return (
        <div className="forecast-details" data-testid="forecast-details">
            <div className="forecast-details__date">
                {moment(date).format("ddd Do MMM")}
            </div>
            <div className="forecast-details__icon" data-testid="forecast-icon">
                <WeatherIcon name="owm" iconId={icon} />
            </div>
            <div className="forecast-details__max-temp">
                <p>
                    Max Temperature: <span>{temperature.max}&deg;C</span>
                </p>
            </div>
            <div className="forecast-details__min-temp">
                <p>
                    Min Temperature: <span>{temperature.min}&deg;C</span>
                </p>
            </div>
            <div className="forecast-details__humidity">
                <p>
                    Humidity: <span>{humidity}%</span>
                </p>
            </div>
            <div className="forecast-details__wind">
                <p>
                    wind: <span>{wind.speed}mph {wind.direction}</span>
                </p>
            </div>
        </div>
    );
};

// prop-validation

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    humidity: PropTypes.number,
  }).isRequired,
};

// exports

export default ForecastDetails;
