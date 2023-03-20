import React from "react";
import styled from "styled-components";

function DrinksDetailSnackTitle() {
  return (
    <InfoContainer>
      <TopBorder>
        <span>Snack</span>
      </TopBorder>
    </InfoContainer>
  );
}

export default DrinksDetailSnackTitle;

const InfoContainer = styled.div`
  font-size: var(--text-large);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--x-large);

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
  padding: var(--2x-small);
`;
