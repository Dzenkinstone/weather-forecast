import { Navigation, List, Item, Link } from "./Navigation.styled";

const NavigationBar = () => {
  return (
    <Navigation>
      <List>
        <Item>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/weather-forecast" end>
            Weather
          </Link>
        </Item>
      </List>
    </Navigation>
  );
};

export default NavigationBar;
