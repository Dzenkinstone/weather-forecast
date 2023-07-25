import { HiOutlineTrash } from "react-icons/hi";
import { Card, City, Link, List, Temperature } from "./WeatherCard.styled";
import getImage from "../../utils/getImage.js";
import { Description } from "../Description";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../redux/weather/weatherSlice";
import { memo, useMemo } from "react";
import { getDays } from "../../utils/getDate";
import DailyCard from "../DailyCard/DailyCard";

const WeatherCard = memo(
  ({ dt, name, weather, main, wind, list, city, idx, icon }) => {
    const dispatch = useDispatch();

    const weatherIcon = useMemo(() => getImage(weather), [weather]);
    const listOfDays = useMemo(() => getDays(list), [list]);

    const onClick = () => {
      return dispatch(deleteCard(idx));
    };

    return (
      <>
        <Card key={dt}>
          <img src={weatherIcon} alt="weather-icon" width={100} />
          <Temperature>{main?.temp.toFixed()}°C</Temperature>
          <City>{city ? city : name}</City>
          <Description main={main} wind={wind} />
          <List>
            {listOfDays.map(({ dt, main, weather }) => {
              return (
                <DailyCard
                  key={dt}
                  dt={dt}
                  main={main}
                  weather={weather}
                  list={list}
                />
              );
            })}
          </List>

          {icon ? (
            <Link onClick={onClick}>
              <HiOutlineTrash size={25} />
            </Link>
          ) : null}
        </Card>
      </>
    );
  }
);

export default WeatherCard;
