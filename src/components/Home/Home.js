import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/weather/operations";
import { List, Search } from "./Home.styled";

import { WeatherCard } from "../WeatherCard";
import { selectList } from "../../redux/weather/selectors";

const Home = () => {
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
      <List>
        <WeatherCard />;
      </List>
    </div>
  );
};

export default Home;
