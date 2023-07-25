import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./DailyCard.styled";
import getImage from "../../utils/getImage";
import getUserTime from "../../utils/getUserTime";
import { selectIsModalOpen } from "../../redux/weather/selectors";
import Modal from "../Modal/Modal";
import { openModal } from "../../redux/weather/weatherSlice";

const DailyCard = ({ dt, main, weather, list }) => {
  const weatherIcon = useMemo(() => getImage(weather), [weather]);

  const [isModalOpen, setIsModalOpen] = useState();

  return (
    <>
      <Card key={dt}>
        <img alt="weather-icon" src={weatherIcon} width={30} height={30} />
        <p style={{ textAlign: "center" }}>{main.temp.toFixed()}°C</p>
        <p>{getUserTime(dt)}</p>
        <button onClick={() => setIsModalOpen(true)}>Modal!</button>
        {isModalOpen && (
          <Modal list={list} dt={dt} setIsModalOpen={setIsModalOpen} />
        )}
      </Card>
    </>
  );
};

export default DailyCard;
