// imports

import PropTypes from "prop-types";
import React from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

// component

// prettier-ignore
const App = ({forecasts, location}) => {
    return (
      <div className="App">
        <LocationDetails city={location.city} country={location.country} location={location} />
        <ForecastSummaries forecasts={forecasts} />
      </div>
    );
};

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

export default App;
