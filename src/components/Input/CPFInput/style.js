import styled from "styled-components";

export const CPFInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  color: #9e9e9e;

  label {
    position: absolute;
    top: -6px;
    font-size: 10px;
  }
`;

export const customCPFInput = styled.input`
  all: unset;

  width: 100%;
  height: 40px;

  background-color: none;
  color: #000;
  border-bottom: 1px solid #9e9e9e;
  text-align: start;
  cursor: text;
  transition: 1ms;

  :focus {
    border-bottom: 1px solid #26a69a;
    box-shadow: 0 1px 0 0 #26a69a;
    transition: 1ms;
  }

  ::placeholder {
    font-size: 12px;
    position: relative;
    bottom: 0;
  }
`;
