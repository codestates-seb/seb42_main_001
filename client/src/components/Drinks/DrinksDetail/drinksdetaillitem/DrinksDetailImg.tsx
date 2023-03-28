import React from "react";
import styled from "styled-components";
import Card from "../../../UI/Card";
import { IDrinksDetailProps } from '../../../../util/interfaces/drinks.inerface'

function DrinksDetailImg({ drinksDetail }: IDrinksDetailProps) {
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--x-large);
  }

  img {
    max-width: 695px;
    height: 50%;
  }
`;

const Size = styled.div`
  width: 100%;
`;
