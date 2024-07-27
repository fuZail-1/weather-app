import axios from "axios";
import React, { useEffect, useState } from "react";
import { getForcastDetails } from "../service/weather-service";
import { useSelector } from "react-redux";

const useCurrentWeatherDetails = () => {
  const [weatherDetails, setweatherDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const city = useSelector((state) => state.searchSlice.city);
  console.log(city);
  useEffect(() => {
    setLoading(true);
    setError("");
    setweatherDetails(null);
    getForcastDetails(city)
      .then((response) => {
        // console.log(response);
        setweatherDetails(response.data);
      })
      .catch((error) => {
        console.error("Error details", error);
        setError("There is an Error loading weather details, please try again");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [city]);

  return { weatherDetails, loading, error };
};

export default useCurrentWeatherDetails;
