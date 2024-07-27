import axios from "axios";
import { DEFAULT_CITY_NAME } from "../config/app-constant";
import { APP_ENDPOINT, generateUrl } from "./app-endpoint";

export const getForcastDetails = (city = DEFAULT_CITY_NAME) => {
  return axios.get(`${generateUrl(APP_ENDPOINT.forcast)}&q=${city}`);
};

export const getCurrentWeatherDetails = (city = DEFAULT_CITY_NAME) => {
  return axios.get(`${generateUrl(APP_ENDPOINT.currentWeather)}&q=${city}`);
};
