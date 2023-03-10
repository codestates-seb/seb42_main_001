import React from "react";
import styled from "styled-components";

function DrinksDetailChartTitle() {
  return (
    <InfoContainer>
      <TopBorder>
        <span>Tasting Note</span>
      </TopBorder>
    </InfoContainer>
  );
}

export default DrinksDetailChartTitle;

const InfoContainer = styled.div`
  font-size: var(--text-large);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  span {
    font-weight: var(--weight-large);
  }
`;

const TopBorder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid var(--color-main);
  padding: var(--xx-small);
`;
