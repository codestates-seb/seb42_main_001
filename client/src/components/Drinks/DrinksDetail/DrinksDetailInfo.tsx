import React from "react";
import styled from "styled-components";

function DrinksDetailInfo() {
  return (
    <InfoContainer>
      <TopBorder>
        <span>Entry-Level</span>
      </TopBorder>
      <InfoContainer>
        <TopBorderMargin>
          <span>도수</span>
          <p>40%</p>
        </TopBorderMargin>
        <TopBorderMargin>
          <span>용량</span>
          <p>375ml</p>
        </TopBorderMargin>
      </InfoContainer>
    </InfoContainer>
  );
}

export default DrinksDetailInfo;

const InfoContainer = styled.div`
  font-size: var(--text-small);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  span {
    font-weight: var(--weight-large);
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--3x-large);
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

  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: var(--x-small);
  }
`;

const TopBorderMargin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid var(--color-main);
  padding: var(--xx-small);
  margin-left: var(--large);

  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: var(--x-small);
  }
`;
