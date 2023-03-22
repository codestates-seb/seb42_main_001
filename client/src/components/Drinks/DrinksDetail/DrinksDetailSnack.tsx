import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";
import { DrinksSnacksProps } from '../../../interfaces/drinks.inerface'


function DrinksDetailSnack({ drinksDetail }: DrinksSnacksProps) {
  return (
    <SnackContainer>
      <Card>
        <ImgContainer>
          <img src={`${drinksDetail.snackImageUrl}`} alt={drinksDetail.snackName} />
        </ImgContainer>
      </Card>
      <Name>{drinksDetail.snackName}</Name>
      <Kcal>{drinksDetail.snackKcal} Kcal</Kcal>
      <Info>{drinksDetail.snackInfo}</Info>
    </SnackContainer>
  );
}

export default DrinksDetailSnack;

const SnackContainer = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 var(--x-large) var(--2x-large) var(--x-large);
  
  div {
    border-radius: var(--4x-large);
  }

  img {
    width: 80%;
    height: auto;
    border-radius: var(--4x-large);
  }
`;

const ImgContainer = styled.div`
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white);
`

const Name = styled.p`
    margin: var(--medium) 0 var(--3x-small) 0;
    font-size: var(--small);
    font-weight: var(--weight-medium);
`

const Kcal = styled.p`
  font-size: var(--x-small);
  color: var(--color-sub-dark-gray);
`

const Info = styled.div`
  margin-top: var(--medium);
  line-height: 22px;
  width: 50%;
`
