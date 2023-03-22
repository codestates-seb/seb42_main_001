import React from 'react'
import styled from 'styled-components'
import { Drinks } from '../../../interfaces/drinkss.inerface';

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
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: var(--large);

    img {
      width: auto;
      max-width: 240px;
      height: 220px;
      margin-top: var(--small);
      margin-bottom: var(--medium);
    }

    div {
      margin-top: var(--large);
      font-size: var(--text-medium);
      font-weight: var(--weight-large);
    }

`