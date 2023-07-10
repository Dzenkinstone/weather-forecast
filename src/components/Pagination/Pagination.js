import { Button, List } from "./Pagination.styled";

const Pagination = ({ totalPosts, posts, setPage, page }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / posts); i += 1) {
    pages.push(i);
  }

  return (
    <List>
      {pages.map((currentPage, index) => {
        return (
          <Button
            currentPage={currentPage}
            page={page}
            onClick={() => setPage(currentPage)}
            key={index}
          >
            {currentPage}
          </Button>
        );
      })}
    </List>
  );
};

export default Pagination;
