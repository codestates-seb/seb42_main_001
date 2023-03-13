import React from "react";
import DrinksDetailChart from "./DrinksDetailChart";
import DrinksDetailChartTitle from "./DrinksDetailChartTitle";
import styled from "styled-components";

function DrinksDetailTasting() {
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
`;
