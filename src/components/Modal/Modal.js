import { MainModal } from "./Modal.styled";
import { useCallback, useEffect, useRef } from "react";
import { ModalContent } from "../ModalContent";

const Modal = ({ list, dt, setIsModalOpen, isModalOpen, city }) => {
  const body = document.querySelector("body");

  const modalRef = useRef(null);

  const setRef = useCallback(
    (node) => {
      const onCLick = (event) => {
        if (event.target !== event.currentTarget) {
          return;
        }

        setIsModalOpen(false);
      };

      if (modalRef.current) {
        modalRef.current.removeEventListener("click", onCLick);
      }

      if (node) {
        node.addEventListener("click", onCLick);
      }

      // Save a reference to the node
      modalRef.current = node;
    },
    [setIsModalOpen]
  );

  useEffect(() => {
    body.style.overflowY = isModalOpen ? "hidden" : "visible";

    const handleChange = (event) => {
      if (event.code !== "Escape") {
        return;
      }

      setIsModalOpen(false);
    };

    window.addEventListener("keydown", handleChange);

    return () => {
      window.removeEventListener("keydown", handleChange);
    };
  }, [body, isModalOpen, setIsModalOpen]);

  return (
    isModalOpen && (
      <MainModal ref={setRef} isModalOpen={isModalOpen}>
        <ModalContent
          city={city}
          dt={dt}
          list={list}
          setIsModalOpen={setIsModalOpen}
        />
      </MainModal>
    )
  );
};

export default Modal;
