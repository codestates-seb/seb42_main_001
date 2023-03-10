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
`;

const TopBorder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid var(--color-main);
  padding: var(--padding-xx-small);
`;

const TopBorderMargin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid var(--color-main);
  padding: var(--padding-xx-small);
  margin-left: var(--margin-samll);
`;
