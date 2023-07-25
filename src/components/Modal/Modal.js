import { Overlay, Background, Link, Text, Item, List } from "./Modal.styled";

import getImage from "../../utils/getImage";
import { GrClose } from "react-icons/gr";
import { getForecastByDay, getMinutes } from "../../utils/getDate";

const Modal = ({ list, dt, setIsModalOpen }) => {
  const findForecast = getForecastByDay(dt, list);

  return (
    <Overlay>
      <Background>
        <Link onClick={() => setIsModalOpen(false)}>
          <GrClose />
        </Link>
        <List>
          {findForecast.map(({ dt, main, weather }, index, array) => {
            const weatherIcon = getImage(weather);

            return (
              <Item key={dt}>
                <img
                  alt="weather-icon"
                  src={weatherIcon}
                  width={30}
                  height={30}
                />
                <Text style={{ textAlign: "center" }}>
                  {`${main.temp.toFixed()}°C`}
                </Text>
                <Text>{getMinutes(dt)}</Text>
                <Text>{weather[0].description}</Text>
              </Item>
            );
          })}
        </List>
      </Background>
    </Overlay>
  );
};

export default Modal;
