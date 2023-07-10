import styled from "@emotion/styled";

export const List = styled.ul`
  display: inline-block;
`;

export const Button = styled.button`
  color: #000000;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.5s;
  border: 1px solid #ddd;
  font-size: 14px;
  background-color: ${(props) => {
    return props.currentPage === props.page ? "yellow" : "0000a3";
  }};

  &:active {
    background-color: #0096ff;
    color: #ffffff;
    border: 1px solid #0096ff;
  }

  &:hover:not(&:active) {
    background-color: #ddd;
  }
`;
