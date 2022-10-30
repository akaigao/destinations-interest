import styled from "styled-components";

export const Container = styled.div`
  gap: 80px;
  width: 80%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    padding: 50px 0px;
  }
`;
