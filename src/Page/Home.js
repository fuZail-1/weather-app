import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TABS } from "../config/app-constant";
import Forcast from "../component/Forcast";
import CurrentWeather from "../component/CurrentWeather";

const Home = () => {
  const [tabSelected, setTabSelected] = useState(TABS.FORCAST);
  const city = useSelector((state) => state.searchSlice.city);
  const handleTabClick = (tab) => {
    setTabSelected(tab);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div>Weather Details For {city} </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a
              className={`nav-link ${
                tabSelected === TABS.FORCAST ? "active" : ""
              }`}
              href="#"
              onClick={() => handleTabClick(TABS.FORCAST)}
            >
              Forecast
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                tabSelected === TABS.CURRENT_WEATHER ? "active" : ""
              }`}
              aria-current="page"
              href="#"
              onClick={() => handleTabClick(TABS.CURRENT_WEATHER)}
            >
              CurrentWeather
            </a>
          </li>
        </ul>
      </div>
      {tabSelected === TABS.FORCAST && <Forcast />}
      {tabSelected === TABS.CURRENT_WEATHER && <CurrentWeather />}
    </div>
  );
};

export default Home;
