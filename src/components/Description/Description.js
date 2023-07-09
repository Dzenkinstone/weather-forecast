import {
  Container,
  Content,
  Image,
  Text,
  TextWrapper,
} from "./Description.styled";

import humidity from "../../images/humidity.png";
import windIcon from "../../images/windIcon.png";

const Description = ({ main, wind }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default Description;
