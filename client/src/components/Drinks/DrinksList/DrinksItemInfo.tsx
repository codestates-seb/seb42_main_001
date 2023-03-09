import React from 'react'
import DrinksLikes from './DrinksItemLikes'
import DrinksTags from './DrinksItemTags'
import styled from 'styled-components'

function DrinksItemInfo() {
  return (
    <InfoContainer>
      <DrinksLikes />
      <DrinksTags />
    </InfoContainer>
  )
}

export default DrinksItemInfo

const InfoContainer = styled.div`
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-large) var(--padding-large) 0 var(--padding-large);
`