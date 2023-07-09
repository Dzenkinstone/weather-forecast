import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: ${(props) => {
    return props.currentPage === props.page ? "red" : "blue";
  }};
`;
