import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 100%;
  padding: 20px 0;
  gap: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .boxSelect {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffa800;
    font-weight: 700;
    padding: 10px 18px;
    border: 2px solid #ffa800;
    border-radius: 5px;

    cursor: pointer;
  }

  .contact {
    display: flex;
    flex-direction: column;

    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 400;
    color: #737373;
  }

  .error--message {
    color: red;
  }
`;
