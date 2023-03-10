import React from 'react'
import styled from 'styled-components'
import DrinksDetailSnacks from './DrinksDetailSnacks'
import DrinksDetailTasting from './DrinksDetailTasting'
import DrinksDetailWiths from './DrinksDetailWiths'

function DrinksDetailContent() {
  return (
    <ContentContainer>
      <DrinksDetailTasting />
      <DrinksDetailSnacks />
      <DrinksDetailWiths />
    </ContentContainer>
  )
}

export default DrinksDetailContent

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`