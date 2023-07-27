import { useMemo, useState } from "react";
import { Button, Card } from "./DailyCard.styled";
import getImage from "../../utils/getImage";
import { getUserTime } from "../../utils/getDate";
import Modal from "../Modal/Modal";

const DailyCard = ({ dt, main, weather, list, city }) => {
  const weatherIcon = useMemo(() => getImage(weather), [weather]);

  const [isModalOpen, setIsModalOpen] = useState();

  return (
    <>
      <Card key={dt}>
        <Button onClick={() => setIsModalOpen(true)}>
          <img alt="weather-icon" src={weatherIcon} width={30} height={30} />
          <p style={{ textAlign: "center" }}>{main.temp.toFixed()}°C</p>
          <p>{getUserTime(dt)}</p>
        </Button>

        <Modal
          city={city}
          list={list}
          dt={dt}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </Card>
    </>
  );
};

export default DailyCard;
