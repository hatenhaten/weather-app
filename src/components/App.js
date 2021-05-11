// imports

import PropTypes from "prop-types";
import React, { useState } from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

// component

// prettier-ignore
const App = ({forecasts, location}) => {
    const [ selectedDate, setSelectedDate ] = useState(forecasts[0].date);
    const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);
    const handleForecastSelect = (date) => {
      setSelectedDate(date);
    };

    return (
      <div className="weather-app">
        <LocationDetails 
          city={location.city} 
          country={location.country} 
          location={location} 
        />
        <ForecastSummaries 
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        <ForecastDetails 
          forecast={selectedForecast} 
        />
      </div>
    );
};

// exports

export default App;

// prop validation

App.propTypes = {
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
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
