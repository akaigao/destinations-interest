import styled from "styled-components";

export const Container = styled.div`
  gap: 80px;
  width: 80%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-weight: 700;
    border-bottom: 1px solid #9e9e9e;
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-size: 2.5rem;
  }

  h2 {
    font-weight: 400;
    color: #737373;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  }

  .left,
  .right {
    width: 100%;
  }
`;
