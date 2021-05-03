// imports

import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

// prettier-ignore
const ForecastSummaries = ({forecasts}) => {
    return(
        <div className="forecast-summaries">
            {forecasts.map(forecast => (
                <ForecastSummary
                    key={forecast.date}
                    date={forecast.date}
                    description={forecast.description}
                    icon={forecast.icon}
                    temperature={forecast.temperature}
                />
            ))}
        </div>
    );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ForecastSummaries;
