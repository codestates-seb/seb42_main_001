import React from "react";
import styled from "styled-components";
import DrinksDetailImg from "./DrinksDetailImg";
import DrinksDetailTxt from "./DrinksDetailTxt";

function DrinksDetailItem() {
  return (
    <ItemContainer>
      <DrinksDetailImg />
      <DrinksDetailTxt />
    </ItemContainer>
  );
}

export default DrinksDetailItem;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 1 0;
  margin-top: var(--xxx-large);

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
