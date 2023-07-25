import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: absolute;
  z-index: 9;
  top: 10rem;
  left: 0;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;

  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    border-radius: 20px;
    transition: background-color 0.3s;
    background-color: red;
  }
`;

export const Background = styled.div`
  position: relative;
`;

export const List = styled.ul`
  padding: 40px 10px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 2px;
`;

export const Item = styled.li`
  border: 1px solid #bebebe;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3px;
`;

export const Text = styled.p`
  color: black;
`;
