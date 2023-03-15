import React from "react";
import styled from "styled-components";

function DrinksDetailTitle() {
  return (
    <TitleContainer>
      <span>몽키 숄더</span>
    </TitleContainer>
  );
}

export default DrinksDetailTitle;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    font-size: 70px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--5x-large);
    span {
      font-size: var(--3x-large);
    }
  }
`;
