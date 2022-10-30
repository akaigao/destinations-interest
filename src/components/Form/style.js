import styled from "styled-components";

export const Box = styled.div`
  width: 100%;

  button {
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
  }

  button:hover {
    background-color: #ffa800;
    color: #fff;
    transition: 100ms;
  }

  button:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }

  .error--message {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-transform: uppercase;
    font-size: 8px;
    letter-spacing: 2.5px;
    color: red;
  }
`;
