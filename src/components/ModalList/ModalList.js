import { getForecastByDay } from "../../utils/getDate";
import ModalCard from "../ModalCard/ModalCard";
import { List } from "./ModalList.styled";

const ModalList = ({ dt, list }) => {
  const findForecast = getForecastByDay(dt, list);

  return (
    <List>
      {findForecast.map(({ dt, main, weather }) => {
        return <ModalCard key={dt} dt={dt} main={main} weather={weather} />;
      })}
    </List>
  );
};

export default ModalList;
