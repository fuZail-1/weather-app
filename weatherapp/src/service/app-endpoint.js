import {
  DEFAULT_CITY_NAME,
  WEATHER_API_BASE_URL,
  WEATHER_API_KEY,
} from "../config/app-constant";

export const APP_ENDPOINT = {
  forcast: "forecast.json",
  currentWeather: "current.json",
};

export const generateUrl = (endPoint) => {
  return `${WEATHER_API_BASE_URL}${endPoint}?key=${WEATHER_API_KEY}`;
};
