import React from 'react'
import styled from 'styled-components'
import { Drinks } from '../../../interfaces/Drinks.inerface';

interface DrinksContentsProps {
  drinksData: Drinks;
}

function DrinksItemLevel({ drinksData }: DrinksContentsProps) {
  return (
    <LevelContainer>
      {drinksData.priceRank}
    </LevelContainer>
  )
}

export default DrinksItemLevel

const LevelContainer = styled.div`
  font-size: var(--text-x-small);
  color: var(--color-sub-dark-gray);
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--small);
  border-top: 1px solid var(--color-sub-light-gray);
`