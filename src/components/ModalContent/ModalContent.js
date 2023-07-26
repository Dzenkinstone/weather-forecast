import { getUserTime } from "../../utils/getDate";
import { ModalList } from "../ModalList";
import { Link, Content, City, Day, CloseIcon } from "./ModalContent.styled";

const ModalContent = ({ city, dt, list, setIsModalOpen }) => {
  return (
    <Content>
      <Link onClick={() => setIsModalOpen(false)}>
        <CloseIcon size={50} />
      </Link>
      {city && <City>{city}</City>}
      <Day>{getUserTime(dt)}</Day>
      <ModalList dt={dt} list={list} />
    </Content>
  );
};

export default ModalContent;
