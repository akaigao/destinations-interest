import styled from "styled-components";

export const Box = styled.section`
  width: 100%;
  padding: 20px 0;
  gap: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-weight: 700;

    padding-bottom: 10px;
    font-size: 2.5rem;
  }

  h2 {
    font-weight: 400;
    color: #737373;
    margin-bottom: 20px;
  }

  hr {
    width: 100%;
    border: 0;
    border-bottom: 2px solid #ebecf3;
  }

  .boxSelect {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .contact {
    display: flex;
    flex-direction: column;
    margin-top: 55px;

    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 400;
    color: #737373;
  }
`;
