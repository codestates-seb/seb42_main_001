import React from "react";
import styled from "styled-components";

function DrinksDetailChart() {
  return (
    <ChartContainer>
      <div>단맛 등</div>
    </ChartContainer>
  );
}

export default DrinksDetailChart;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--medium);

  div {
    width: 100%;
    height: 500px;
    background-color: var(--color-main);
  }
`;
