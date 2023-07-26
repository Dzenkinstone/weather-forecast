import styled from "@emotion/styled";
import { IoIosClose } from "react-icons/io";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 30px;
  border-radius: 10px;
`;

export const City = styled.h2`
  color: black;
  text-align: center;
`;

export const Day = styled.h3`
  color: black;
  text-align: center;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: transparent;

  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0.2em;

  &:hover svg {
    transition: fill 0.3s;
    fill: red;
  }
`;

export const CloseIcon = styled(IoIosClose)`
  color: #1daf;
`;
