import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav``;

export const List = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;

  gap: 70px;
`;

export const Link = styled(NavLink)`
  &:hover {
    color: red;
  }
`;
