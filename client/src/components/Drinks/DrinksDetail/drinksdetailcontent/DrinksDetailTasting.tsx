import React from "react";
import DrinksDetailChart from "./drinksdetailtasting/DrinksDetailChart";
import DrinksDetailChartTitle from "./drinksdetailtasting/DrinksDetailChartTitle";
import styled from "styled-components";
import { IDrinksDetailProps } from '../../../../util/interfaces/drinks.inerface'

function DrinksDetailTasting({ drinksDetail }: IDrinksDetailProps) {
  return (
    <TastingContainer>
      <DrinksDetailChartTitle />
      <DrinksDetailChart drinksDetail={drinksDetail} />
    </TastingContainer>
  );
}

export default DrinksDetailTasting;

const TastingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: var(--medium) 0;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
