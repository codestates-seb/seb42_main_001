import React from "react";
import styled from "styled-components";
import DrinksDetailBox from "./DrinksDetailBox";
import DrinksDetailInfo from "./DrinksDetailInfo";
import DrinksDetailTitle from "./DrinksDetailTitle";
import { DrinksDetailProps } from '../../../interfaces/drinks.inerface'

function DrinksDetailTxt({ drinksDetail }: DrinksDetailProps) {
  return (
    <TxtContainer>
      <DrinksDetailInfo drinksDetail={drinksDetail} />
      <DrinksDetailTitle drinksDetail={drinksDetail} />
      <DrinksDetailBox drinksDetail={drinksDetail} />
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
    margin-bottom: var(--2x-large);
  }
`;
