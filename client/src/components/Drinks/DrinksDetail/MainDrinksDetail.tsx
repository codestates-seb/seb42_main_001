import React from 'react'
import styled from 'styled-components'
import DrinksDetailComment from './DrinksDetailComment'
import DrinksDetailContent from './DrinksDetailContent'
import DrinksDetailItem from './DrinksDetailItem'

function MainDrinksDetail() {
  return (
    <MainDetailContainer>
      <DrinksDetailItem />
      <DrinksDetailContent />
      <DrinksDetailComment />
    </MainDetailContainer>
  )
}

export default MainDrinksDetail

const MainDetailContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`