import styled from "@emotion/styled";
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 30px;
  display: flex;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 30px;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;

export const Input = styled.input`
  height: 100%;
  outline: none;
  border: none;
  font-weight: 500;
  transition: 0.8s;
  background: transparent;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: white;
`;

export const Image = styled(AiOutlineSearch)`
  color: #1daf;
  font-size: 18px;
`;
