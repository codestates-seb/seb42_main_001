import React, { useEffect } from 'react'
import styled from 'styled-components'
import DrinksDetailComment from './DrinksDetailComment'
import DrinksDetailContent from './DrinksDetailContent'
import DrinksDetailItem from './DrinksDetailItem'
import { DrinksDetailProps } from '../../../interfaces/drinks.inerface'

function MainDrinksDetail({ drinksDetail }: DrinksDetailProps) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MainDetailContainer>
      <DrinksDetailItem drinksDetail={drinksDetail} />
      <DrinksDetailContent drinksDetail={drinksDetail} />
      <DrinksDetailComment drinksDetail={drinksDetail} />
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