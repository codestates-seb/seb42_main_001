import React from "react";
import styled from "styled-components";

function DrinksDetailInfo() {
  return (
    <InfoContainer>
      <InfoContainer>Entry-Level</InfoContainer>
      <InfoContainer>
        <InfoContainer>
          <span>도수</span>
          <span>40%</span>
        </InfoContainer>
        <InfoContainer>
          <span>용량</span>
          <span>375ml</span>
        </InfoContainer>
      </InfoContainer>
    </InfoContainer>
  );
}

export default DrinksDetailInfo;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
