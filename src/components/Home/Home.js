import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/weather/operations";
import { Container } from "./Home.styled";

import { WeatherCard } from "../WeatherCard";
import { selectList } from "../../redux/weather/selectors";
import { Toaster, toast } from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectList);
  const currentWeather = [...list].splice(1, 1);

  useMemo(() => {
    const successCallback = (position) => {
      const currentPosition = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };

      dispatch(getWeather(currentPosition));
    };

    const errorCallback = (error) => {
      return toast(
        "Ми не змогли отримати вашу геолокацію для прогнозу погоди",
        {
          duration: 2000,
          toastId: error.message,
        }
      );
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, [dispatch]);

  return (
    <Container>
      <h1>Ваш прогноз погоди</h1>
      {currentWeather.map(({ dt, name, weather, main, wind }) => {
        return (
          <WeatherCard
            key={dt}
            dt={dt}
            name={name}
            weather={weather}
            list={list}
            main={main}
            wind={wind}
            icon={false}
          />
        );
      })}
      <Toaster autoClose={5000} closeOnClick />
    </Container>
  );
};

export default Home;
