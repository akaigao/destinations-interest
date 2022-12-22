import styled from "styled-components";
import { ButtonContainer } from "../Button/style";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 100px;
  padding: 30px 50px;

  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;

  a {
    text-decoration: none;
    color: #0000ff;
  }
`;

export const ButtonHeader = styled(ButtonContainer)`
  color: #0000ff;
  border: 2px solid #0000ff;

  :hover {
    background-color: #0000ff;
    color: #fff;

    a {
      color: #fff;
    }
  }
`;
