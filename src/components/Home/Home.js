import { useEffect } from "react";
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

  useEffect(() => {
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
      <h1>Your weather forecast</h1>
      <WeatherCard icon={false} list={list} currentWeather={currentWeather} />;
      <Toaster autoClose={5000} closeOnClick />
    </Container>
  );
};

export default Home;
