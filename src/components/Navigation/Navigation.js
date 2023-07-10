import {
  Navigation,
  List,
  Item,
  Link,
  HomeLink,
  Wrapper,
  Logo,
  Text,
} from "./Navigation.styled";
import { BsFillCloudSunFill } from "react-icons/bs";

const NavigationBar = () => {
  return (
    <Navigation>
      <List>
        <Item>
          <Logo to="/">
            <BsFillCloudSunFill color="#1daf" />
            <Text>WF</Text>
          </Logo>
        </Item>
        <Item>
          <HomeLink to="/" end>
            Home
          </HomeLink>
          <Link to="/weather-forecast" end>
            Weather
          </Link>
        </Item>
      </List>
    </Navigation>
  );
};

export default NavigationBar;
