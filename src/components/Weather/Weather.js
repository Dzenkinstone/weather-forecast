import { useDispatch, useSelector } from "react-redux";
import { searchWeather } from "../../redux/weather/operations";
import { selectCityList } from "../../redux/weather/selectors";

const Weather = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectCityList);

  const onClick = (event) => {
    event.preventDefault();

    return dispatch(searchWeather(event.currentTarget.search.value));
  };

  return (
    <>
      <div>
        <form onSubmit={onClick}>
          <input name="search"></input>
          <button type="submit">Click!</button>
        </form>
      </div>
      <ul>{}</ul>
    </>
  );
};

export default Weather;
