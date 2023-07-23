import styled from "@emotion/styled";

export const Card = styled.div`
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
  background-color: red;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    transition: background-color 0.6s;
    background-color: rgb(220, 20, 60);
  }
`;
