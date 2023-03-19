import React from "react";
import DrinksDetailChart from "./DrinksDetailChart";
import DrinksDetailChartTitle from "./DrinksDetailChartTitle";
import styled from "styled-components";
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'

function DrinksDetailTasting({ drinksDetail }: DrinksDetailProps) {
  return (
    <TastingContainer>
      <DrinksDetailChartTitle />
      <DrinksDetailChart />
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
