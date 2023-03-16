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
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: var(--4x-large);
  padding: var(--medium) 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
  height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-bottom: var(--xx-large);
  }
`;
