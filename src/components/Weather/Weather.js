import { useDispatch, useSelector } from "react-redux";
import { searchWeather } from "../../redux/weather/operations";
import { selectCities, selectCityList } from "../../redux/weather/selectors";
import { WeatherCard } from "../WeatherCard";
import { Content, List } from "./Weather.styled";
import { Search } from "../Search";
import { nanoid } from "nanoid";
import { Toaster, toast } from "react-hot-toast";
const translit = require("ua-en-translit");

const Weather = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectCityList);
  const cities = useSelector(selectCities);

  const onSubmit = (event) => {
    event.preventDefault();
    const city = translit(
      event.currentTarget.search.value.trim().toLowerCase()
    );

    const condition = cities.some((item) => item.toLowerCase() === city);

    if (condition) {
      return toast("Це місто вже використовується", {
        duration: 2000,
        style: {
          backgroundColor: "red",
          color: "white",
          fontSize: "20px",
        },
      });
    }

    dispatch(searchWeather(city));
  };

  return (
    <Content>
      <Search onClick={onSubmit} />
      <List>
        {list.map((item, idx) => {
          const id = nanoid();
          const currentWeather = [...item].splice(1, 1);
          return (
            <WeatherCard
              key={id}
              list={item}
              currentWeather={currentWeather}
              city={cities[idx]}
              idx={idx}
              icon={true}
            />
          );
        })}
      </List>
      <Toaster />
    </Content>
  );
};

export default Weather;
