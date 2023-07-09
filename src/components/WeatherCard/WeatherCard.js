import { Card, City, Temperature } from "./WeatherCard.styled";

import { DailyCard } from "../DailyCard";
import getImage from "../../utils/getImage.js";
import { Description } from "../Description";
import { useSelector } from "react-redux";
import { selectList, selectCity } from "../../redux/weather/selectors";

const WeatherCard = () => {
  const list = useSelector(selectList);
  const city = useSelector(selectCity);
  const currentWeather = [...list].splice(1, 1);

  return (
    <>
      {currentWeather.map(({ dt, weather, main, wind }) => {
        const weatherIcon = getImage(weather);

        return (
          <Card key={dt}>
            <img src={weatherIcon} width={100} />
            <Temperature>{main.temp.toFixed()}°C</Temperature>
            <City>{city.name}</City>
            <Description main={main} wind={wind} />
            <DailyCard />
          </Card>
        );
      })}
    </>
  );
};

export default WeatherCard;
