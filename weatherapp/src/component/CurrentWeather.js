import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useWeatherForcastDetails from "../service-hooks/useWeatherDetails";
import useCurrentWeatherDetails from "../service-hooks/useCurrentWeatherDetails";

const CurrentWeather = () => {
  const dispatch = useDispatch();
  const { weatherDetails, error, loading } = useCurrentWeatherDetails();
  console.log(weatherDetails, "data8");
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {weatherDetails && (
          <div className="card text-center" style={{ width: "30rem" }}>
            <div className="card-header">{weatherDetails.location.country}</div>
            <div className="card-body">
              <p className="card-text">
                min temp
                <strong className="p-2">
                  {weatherDetails.forecast.forecastday[0].day.maxtemp_c}
                </strong>
                Km/h
              </p>
            </div>
            <div className="card-footer text-body-secondary">
              {weatherDetails.forecast.forecastday[0].date}
            </div>
          </div>
        )}
      </div>
      <div>{loading && "Loading"}</div>
      <div>{error && `Error: ${error}`}</div>
    </div>
  );
};

export default CurrentWeather;
