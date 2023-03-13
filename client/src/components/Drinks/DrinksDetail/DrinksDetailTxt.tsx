import React from "react";
import styled from "styled-components";
import DrinksDetailBox from "./DrinksDetailBox";
import DrinksDetailInfo from "./DrinksDetailInfo";
import DrinksDetailTitle from "./DrinksDetailTitle";

function DrinksDetailTxt() {
  return (
    <TxtContainer>
      <DrinksDetailInfo />
      <DrinksDetailTitle />
      <DrinksDetailBox />
    </TxtContainer>
  );
}

export default DrinksDetailTxt;

const TxtContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: var(--xxx-large);
  padding: var(--medium) 0;
`;
