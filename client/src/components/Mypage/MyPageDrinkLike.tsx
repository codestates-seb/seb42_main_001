import React from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'

function MyPageDrinkLike() {
    return (
        <Card>
            <MainContainer>
                jim beam
            </MainContainer>
        </Card>
    )
}

export default MyPageDrinkLike

const MainContainer = styled.div`
    width: 100%;
    height: var(--3x-large);
    display: flex;
    justify-content: center;
    align-items: center;
`