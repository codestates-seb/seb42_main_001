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
`;
