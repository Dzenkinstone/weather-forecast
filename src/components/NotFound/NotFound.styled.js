import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Section = styled.section`
  background: #fff;
  padding: 50px 0px;
  font-family: "Arvo", serif;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Background = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: 50px;
`;

export const Text = styled.h3`
  font-size: 80px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const GoToHome = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: white;
  margin: 0 auto;
  background: #39ac31;
`;

export const Link = styled(NavLink)`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 22px;
  color: #fff;
`;
