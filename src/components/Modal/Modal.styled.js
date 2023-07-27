import styled from "@emotion/styled";

export const Backdrop = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  visibility: ${({ isModalOpen }) => (isModalOpen ? "visible" : "hidden")};
  pointer-events: ${({ isModalOpen }) => (isModalOpen ? "initial" : "none")};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
