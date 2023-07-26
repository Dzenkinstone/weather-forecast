import { useMemo } from "react";
import getImage from "../../utils/getImage";
import { getMinutes } from "../../utils/getDate";
import { Text, Item, Time } from "./ModalCard.styled";

const ModalCard = ({ dt, main, weather }) => {
  const weatherIcon = useMemo(() => getImage(weather), [weather]);

  return (
    <Item key={dt}>
      <Time>{getMinutes(dt)}</Time>
      <img alt="weather-icon" src={weatherIcon} width={30} height={30} />
      <Text>{`${main.temp.toFixed()}°C`}</Text>
      <Text>{weather[0].description}</Text>
    </Item>
  );
};
export default ModalCard;
