import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/weather/operations";
import { Container, Search } from "./Home.styled";

import { WeatherCard } from "../WeatherCard";
import { selectList } from "../../redux/weather/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const currentWeather = [...list].splice(1, 1);

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
    <Container>
      <h1>Your weather forecast</h1>
      <WeatherCard list={list} currentWeather={currentWeather} />;
    </Container>
  );
};

export default Home;
