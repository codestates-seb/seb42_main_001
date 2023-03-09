import React from 'react'
import DrinksLikes from './DrinksLikes'
import DrinksTags from './DrinksTags'
import styled from 'styled-components'

function DrinksInfo() {
  return (
    <InfoContainer>
      <DrinksLikes />
      <DrinksTags />
    </InfoContainer>
  )
}

export default DrinksInfo

const InfoContainer = styled.div`
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-large) var(--padding-large) 0 var(--padding-large);
`