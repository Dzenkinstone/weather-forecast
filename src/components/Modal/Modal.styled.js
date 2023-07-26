import styled from "@emotion/styled";
import { IoIosClose } from "react-icons/io";

export const MainModal = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  visibility: ${({ isModalOpen }) => (isModalOpen ? "visible" : "hidden")};
  pointer-events: ${({ isModalOpen }) => (isModalOpen ? "initial" : "none")};
  transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1),
    visibility 1s cubic-bezier(0.4, 0, 0.2, 1);
`;
