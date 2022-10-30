import styled from "styled-components";

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

  button {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #0000ff;
    background-color: #fff;
    font-weight: 700;
    padding: 10px 18px;
    border: 2px solid #0000ff;
    border-radius: 5px;

    cursor: pointer;
    transition: 100ms;

    a {
      text-decoration: none;
      color: #0000ff;
    }
  }

  button:hover {
    background-color: #0000ff;
    color: #fff;
    transition: 100ms;

    a {
      color: #fff;
    }
  }
`;
