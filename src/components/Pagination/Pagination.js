import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Pagination.styled";
import { selectPage } from "../../redux/weather/selectors";
import { setPage } from "../../redux/weather/pageSlice";

const Pagination = ({ totalPosts, posts }) => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / posts); i += 1) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((currentPage, index) => {
        return (
          <Button
            currentPage={currentPage}
            page={page}
            onClick={() => dispatch(setPage(currentPage))}
            key={index}
          >
            {currentPage}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
