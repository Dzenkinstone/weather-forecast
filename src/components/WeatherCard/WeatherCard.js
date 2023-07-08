import {
  Card,
  City,
  Content,
  Description,
  Image,
  Temperature,
  Text,
  TextWrapper,
} from "./WeatherCard.styled";

import humidity from "../../images/humidity.png";
import windIcon from "../../images/windIcon.png";
import { DailyCard } from "../DailyCard";

import getImage from "../../utils/getImage.js";

const WeatherCard = ({ list, city }) => {
  return (
    <>
      {list.map(({ dt, weather, main, wind }) => {
        const weatherIcon = getImage(weather);

        return (
          <Card key={dt}>
            <img src={weatherIcon} width={100} />
            <Temperature>{main.temp.toFixed()}°C</Temperature>
            <City>{city}</City>
            <Description>
              <Content>
                <Image src={humidity} width={30} height={30} />
                <TextWrapper>
                  <Text>{main.humidity}%</Text>
                  <Text>Влажність</Text>
                </TextWrapper>
              </Content>
              <Content>
                <Image src={windIcon} width={30} height={30} />
                <TextWrapper>
                  <Text>{wind.speed} км/год</Text>
                  <Text>Швидкість вітру</Text>
                </TextWrapper>
              </Content>
            </Description>
            <DailyCard list={list} />
          </Card>
        );
      })}
    </>
  );
};

export default WeatherCard;
