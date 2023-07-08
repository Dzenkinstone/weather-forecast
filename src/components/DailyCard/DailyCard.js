import { Card, List } from "./DailyCard.styled";

const DailyCard = ({ list }) => {
  const listWithoutIndexOne = [...list].splice(1, list.length - 1);

  <List>
    {listWithoutIndexOne.map(({ dt, main }) => {
      return <Card key={dt}>2</Card>;
    })}
  </List>;
};

export default DailyCard;
