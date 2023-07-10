import { Button, Container, Form, Image, Input } from "./Search.styled";

const Search = ({ onClick }) => {
  return (
    <Container>
      <Form onSubmit={onClick}>
        <Input placeholder="Шукати місто..." name="search" />
        <Button type="submit">
          <Image />
        </Button>
      </Form>
    </Container>
  );
};

export default Search;
