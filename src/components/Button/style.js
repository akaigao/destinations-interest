import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffa800;
  background-color: #fff;
  font-weight: 700;
  padding: 10px 18px;
  border: 2px solid #ffa800;
  border-radius: 5px;

  cursor: pointer;
  transition: 100ms;

  :hover {
    background-color: #ffa800;
    color: #fff;
    transition: 100ms;
  }
`;
