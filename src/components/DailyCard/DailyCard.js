import { Card } from "./DailyCard.styled";

import getImage from "../../utils/getImage";
import getUserTime from "../../utils/getUserTime";
import { useMemo } from "react";

const DailyCard = ({ dt, main, weather }) => {
  const weatherIcon = useMemo(() => getImage(weather), [weather]);
  return (
    <>
      <Card key={dt}>
        <img alt="weather-icon" src={weatherIcon} width={30} height={30} />
        <p style={{ textAlign: "center" }}>{main.temp.toFixed()}°C</p>
        <p>{getUserTime(dt)}</p>
      </Card>
    </>
  );
};

export default DailyCard;
