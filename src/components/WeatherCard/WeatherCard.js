import { Card, City, Temperature } from "./WeatherCard.styled";

import { DailyCard } from "../DailyCard";
import getImage from "../../utils/getImage.js";
import { Description } from "../Description";

const WeatherCard = ({ currentWeather, list }) => {
  return (
    <li>
      {currentWeather &&
        currentWeather.map(({ dt, name, weather, main, wind }) => {
          const weatherIcon = getImage(weather);

          return (
            <Card key={dt}>
              <img src={weatherIcon} width={100} />
              <Temperature>{main?.temp.toFixed()}°C</Temperature>
              <City>{name}</City>
              <Description main={main} wind={wind} />
              <DailyCard list={list} />
            </Card>
          );
        })}
    </li>
  );
};

export default WeatherCard;
