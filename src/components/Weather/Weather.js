import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/weather/operations";
import { selectForecast, selectPlace } from "../../redux/weather/selectors";
import {
  Card,
  City,
  Content,
  Description,
  Image,
  List,
  Temperature,
  Text,
  TextWrapper,
} from "./Weather.styled";

import { WeatherCard } from "../WeatherCard";

const Weather = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectForecast);
  const city = useSelector(selectPlace);

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
      <input type="search"></input>
      <List>
        <WeatherCard list={list} city={city} />
      </List>
    </div>
  );
};

export default Weather;
