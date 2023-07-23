import { HiOutlineTrash } from "react-icons/hi";
import { Card, City, Link, Temperature } from "./WeatherCard.styled";
import { DailyCard } from "../DailyCard";
import getImage from "../../utils/getImage.js";
import { Description } from "../Description";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../redux/weather/weatherSlice";

const WeatherCard = ({ currentWeather, list, city, idx, icon }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    return dispatch(deleteCard(idx));
  };

  return (
    <>
      {currentWeather.map(({ dt, name, weather, main, wind }, index) => {
        const weatherIcon = getImage(weather);
        return (
          <Card key={dt}>
            <img src={weatherIcon} alt="weather-icon" width={100} />
            <Temperature>{main?.temp.toFixed()}°C</Temperature>
            <City>{city ? city : name}</City>
            <Description main={main} wind={wind} />
            <DailyCard list={list} />
            {icon ? (
              <Link onClick={onClick}>
                <HiOutlineTrash size={25} />
              </Link>
            ) : null}
          </Card>
        );
      })}
    </>
  );
};

export default WeatherCard;
