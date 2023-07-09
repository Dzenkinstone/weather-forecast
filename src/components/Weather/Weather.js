import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../redux/weather/operations";
import { List, Search } from "./Weather.styled";

import { WeatherCard } from "../WeatherCard";

const Weather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  const successCallback = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };

    dispatch(getWeather(currentPosition));
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  return (
    <div>
      <Search type="search"></Search>
      <List>
        <WeatherCard />
      </List>
    </div>
  );
};

export default Weather;
