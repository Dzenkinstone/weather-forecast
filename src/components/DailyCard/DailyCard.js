import { Card, List } from "./DailyCard.styled";
import {
  selectList,
  selectCity,
  selectPage,
} from "../../redux/weather/selectors";
import { useSelector } from "react-redux";
import getImage from "../../utils/getImage";
import { Pagination } from "../Pagination";

const DailyCard = () => {
  const page = useSelector(selectPage);
  const list = useSelector(selectList);
  const weatherForecast = [...list].splice(1, list.length - 1);
  const postsPerPage = 3;
  const lastIndex = page * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPost = weatherForecast.slice(firstIndex, lastIndex);

  return (
    <>
      <List>
        {currentPost.map(({ dt, dt_txt, main, weather }, index) => {
          const weatherIcon = getImage(weather);
          return (
            <Card key={dt}>
              <img src={weatherIcon} width={30} height={30} />
              <p style={{ textAlign: "center" }}>{main.temp.toFixed()}°C</p>
              <p>{dt_txt}</p>
            </Card>
          );
        })}
      </List>
      <Pagination totalPosts={weatherForecast.length} posts={postsPerPage} />
    </>
  );
};

export default DailyCard;
