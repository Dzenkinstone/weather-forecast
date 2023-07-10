import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav``;

export const List = styled.ul`
  align-items: center;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;
  gap: 3px;
`;

export const Logo = styled(NavLink)`
  padding: 10px 0px;
  cursor: pointer;
  display: flex;
  gap: 5px;
`;

export const HomeLink = styled(NavLink)`
  color: black;
  margin-right: 70px;
  padding: 10px 0px;

  &:hover {
    transition: color 0.3s;
    color: #1daf;
  }
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px 0px;

  &:hover {
    transition: color 0.3s;
    color: #1daf;
  }
`;

export const Text = styled.span`
  color: black;
  text-decoration: none;

  &:hover {
    transition: color 0.3s;
    color: #1daf;
  }
`;
