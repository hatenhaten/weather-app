// imports

import React from "react";
import PropTypes from "prop-types";

// component

// prettier-ignore
const LocationDetails = (props) => {
  const { city, country } = props;
  return <h1 className="location-details">{`${city}, ${country}`}</h1>;
};

// prop validation

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

// exports

export default LocationDetails;
