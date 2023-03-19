import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'

function DrinksDetailImg({ drinksDetail }: DrinksDetailProps) {
  return (
    <Size>
      <Card>
        <ImgContainer>
          <img src={`${drinksDetail?.drinkImageUrl}`} alt={`${drinksDetail?.drinkName}`} />
        </ImgContainer>
      </Card>
    </Size>
  );
}

export default DrinksDetailImg;

const ImgContainer = styled.div`
  max-width: 695px;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--xx-small);

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--x-large);
  }
`;

const Size = styled.div`
  width: 100%;
`;
