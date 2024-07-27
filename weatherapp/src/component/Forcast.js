import React, { useState } from "react";
import useWeatherForcastDetails from "../service-hooks/useWeatherDetails";
import { TABS } from "../config/app-constant";

const Forcast = () => {
  const { weatherDetails, error, loading } = useWeatherForcastDetails();

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
              <h5 className="card-title text-primary">
                {weatherDetails.current?.temp_c}°C
              </h5>
              <p className="card-text">
                {weatherDetails.current.condition.text} || Feelslike:
                {weatherDetails.current.feelslike_f}
              </p>
              <p className="card-text">
                Wind
                <strong className="p-2">
                  {weatherDetails.current.wind_kph}
                </strong>
                Km/h
              </p>
            </div>
          </div>
        )}
      </div>
      <div>{loading && "Loading"}</div>
      <div>{error && `Error: ${error}`}</div>
    </div>
  );
};

export default Forcast;
