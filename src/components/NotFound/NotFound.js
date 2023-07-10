import {
  Background,
  Content,
  GoToHome,
  Link,
  Section,
  Title,
} from "./NotFound.styled";
import { BsArrowLeft } from "react-icons/bs";

const NotFound = () => {
  return (
    <Section>
      <Title>404</Title>

      <Background></Background>

      <Content>
        <Title class="h2">Сторінку не знайдено</Title>

        <GoToHome>
          <BsArrowLeft />
          <Link to={"/"}>На головну</Link>
        </GoToHome>
      </Content>
    </Section>
  );
};

export default NotFound;
