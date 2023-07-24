import styled from "@emotion/styled";

export const Card = styled.li`
  position: relative;
  padding: 40px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;

  background: linear-gradient(135deg, #00feba, #5b548a);
  color: #fff;
`;

export const Temperature = styled.h2``;

export const City = styled.h3``;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;

  cursor: pointer;
  position: absolute;
  top: 1em;
  right: 1em;

  &:hover {
    border-radius: 20px;
    transition: background-color 0.3s;
    background-color: red;
  }
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
