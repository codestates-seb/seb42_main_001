import React from 'react'
import MyPageBoard from './MyPageBoard'
import MyPageDrinks from './MyPageDrinks'
import styled from 'styled-components'

function MyPageContent() {
    return (
        <MainContainer>
            <MyPageDrinks />
            <MyPageBoard />
        </MainContainer>
    )
}

export default MyPageContent

const MainContainer = styled.div`
  display:flex;
  margin-bottom: calc(var(--5x-large)*5);
`