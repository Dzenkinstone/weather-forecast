import { useDispatch, useSelector } from "react-redux";
import { searchWeather } from "../../redux/weather/operations";
import { selectCities, selectCityList } from "../../redux/weather/selectors";
import { WeatherCard } from "../WeatherCard";
import { Content, List } from "./Weather.styled";
import { Search } from "../Search";
import { nanoid } from "nanoid";
import { Toaster, toast } from "react-hot-toast";
import translate from "translate";

const Weather = () => {
  translate.engine = "google";
  translate.key = "123123";
  translate.from = "uk";
  const dispatch = useDispatch();
  const list = useSelector(selectCityList);
  const cities = useSelector(selectCities);

  const onSubmit = async (event) => {
    event.preventDefault();
    const city = event.currentTarget.search.value.trim();

    if (city === "") {
      return toast("Введіть місто", {
        duration: 2000,
        style: {
          backgroundColor: "red",
          color: "white",
          fontSize: "20px",
        },
      });
    }

    try {
      const translateCityToEnglish = await translate(city, "en");

      const condition = cities.some((item) => {
        return item.toLowerCase() === translateCityToEnglish.toLowerCase();
      });

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

      dispatch(searchWeather(translateCityToEnglish));
    } catch (error) {}
  };

  return (
    <Content>
      <Search onClick={onSubmit} />
      <List>
        {list.map((item, idx) => {
          const id = nanoid();
          const currentWeather = [...item].splice(1, 1);

          return currentWeather.map(({ dt, name, weather, main, wind }) => {
            return (
              <WeatherCard
                dt={dt}
                name={name}
                weather={weather}
                main={main}
                wind={wind}
                key={id}
                list={item}
                city={cities[idx]}
                idx={idx}
                icon={true}
              />
            );
          });
        })}
      </List>
      <Toaster />
    </Content>
  );
};

export default Weather;
