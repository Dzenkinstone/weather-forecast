import { useDispatch, useSelector } from "react-redux";
import { searchWeather } from "../../redux/weather/operations";
import { selectCityList } from "../../redux/weather/selectors";
import { WeatherCard } from "../WeatherCard";
import { Content, List } from "./Weather.styled";
import { Search } from "../Search";
import { useState } from "react";

const Weather = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectCityList);
  const [error, setError] = useState(false);

  const onClick = (event) => {
    event.preventDefault();
    const city = event.currentTarget.search.value.trim().toLowerCase();

    // const checkCondition = list.map((item) => {
    //   const condition = item.map(({ name }) => {
    //     if (name.toLowerCase() === city) {
    //       return true;
    //     }

    //     return false;
    //   });

    //   const check = condition.some((item) => item === true);

    //   if (check) {
    //     return setError(true);
    //   }

    //   return false;
    // });

    // if (!checkCondition[0]) {
    //   return alert("Це місто вже використовується");
    // }

    return dispatch(searchWeather(city));
  };

  return (
    <Content>
      <Search onClick={onClick} />
      <List>
        {list.map((item, idx) => {
          const currentWeather = [...item].splice(1, 1);
          return (
            <WeatherCard
              key={idx}
              list={item}
              currentWeather={currentWeather}
            />
          );
        })}
      </List>
    </Content>
  );
};

export default Weather;
