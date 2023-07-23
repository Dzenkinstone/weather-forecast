import { Card, List } from "./DailyCard.styled";

import getImage from "../../utils/getImage";
import getUserTime from "../../utils/getUserTime";

const DailyCard = ({ list }) => {
  const weatherForecast = [...list].splice(1, list.length - 1);
  const getDays = [];

  weatherForecast.forEach(({ dt, dt_txt }, index, array) => {
    if (
      new Date(array[index]?.dt * 1000).getDay() ===
      new Date(array[index + 1]?.dt * 1000).getDay()
    ) {
    } else {
      getDays.push(array[index]);
    }

    return;
  });

  return (
    <>
      <List>
        {getDays.map(({ dt, dt_txt, main, weather }) => {
          const weatherIcon = getImage(weather);
          return (
            <Card key={dt}>
              <img
                alt="weather-icon"
                src={weatherIcon}
                width={30}
                height={30}
              />
              <p style={{ textAlign: "center" }}>{main.temp.toFixed()}°C</p>
              <p>{getUserTime(dt)}</p>
            </Card>
          );
        })}
      </List>
    </>
  );
};

export default DailyCard;
