import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Card = styled.li`
  flex: 1 0 25%; /* explanation below */
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: grey;
`;
