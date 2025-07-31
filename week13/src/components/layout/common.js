// src/components/layout/common.js
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  all: unset;
  background-color: ${(props) => props.mode};
  color: black;
  padding: 10px;
  border-radius: 24px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Title = styled.div`
  font-size: 30px;
  margin: 20px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 400px;
  width: 80%;
  text-align: center;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const FormWrapper = styled.div`
  margin-top:1rem;
  margin-bottom : 1rem;
`;