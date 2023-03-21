import React from 'react'
import styled from 'styled-components'
import { Drinks } from '../../../interfaces/Drinks.inerface';

interface DrinksContentsProps {
  drinksData: Drinks;
}

function DrinksItemBody({ drinksData }: DrinksContentsProps) {
  return (
    <BodyContainer>
      <img src={`${drinksData.drinkImageUrl}`} alt="withskey" />
      <div>{drinksData.drinkName}</div>
    </BodyContainer>
  )
}

export default DrinksItemBody

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: var(--large);

    img {
      width: auto;
      max-width: 240px;
      height: 220px;
      margin-bottom: var(--large);
    }

    div {
      margin-top: var(--large);
      font-size: var(--text-medium);
      font-weight: var(--weight-large);
    }

`