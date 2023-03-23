import React from "react";
import styled from "styled-components";
import DrinksDetailImg from "./DrinksDetailImg";
import DrinksDetailTxt from "./DrinksDetailTxt";
import { IDrinksDetailProps } from '../../../interfaces/drinks.inerface'

function DrinksDetailItem({ drinksDetail }: IDrinksDetailProps) {

  return (
    <ItemContainer>
      <DrinksDetailImg drinksDetail={drinksDetail} />
      <DrinksDetailTxt drinksDetail={drinksDetail} />
    </ItemContainer>
  );
}

export default DrinksDetailItem;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1 1 0;
  margin-top: var(--4x-large);

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
