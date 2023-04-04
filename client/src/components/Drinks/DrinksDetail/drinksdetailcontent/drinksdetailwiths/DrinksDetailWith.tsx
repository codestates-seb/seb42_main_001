import React from "react";
import styled from "styled-components";
import Card from "../../../../UI/Card";

function DrinksDetailWith({ drinksDetail }: any) {
  return (
    <SnackContainer>
      <Card>
        <ItemContainer>
          <img src={`${drinksDetail.imageUrl}`} alt={drinksDetail.drinkName} />
        </ItemContainer>
        <TextContainer>{drinksDetail.drinkName}</TextContainer>
      </Card>
    </SnackContainer>
  );
}

export default DrinksDetailWith;

const SnackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 var(--large) var(--2x-large) var(--large);
  transition: .4s;

  &:hover {
    transition: .4s;
    border-radius: 10px;
    box-shadow: 0px 0px 20px #473f3f73;
  }
`;

const ItemContainer = styled.div`
  width: 210px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--x-small) 0;

  img {
    max-width: 190px;
    height: 65%;
  }
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--x-small);
  font-weight: var(--weight-large);
  margin-bottom: var(--large);
`