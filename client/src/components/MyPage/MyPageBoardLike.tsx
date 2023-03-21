import React from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'

function MyPageBoardLike() {
    return (
        <Card>
            <MainContainer>
                <p>jim beam</p>
                <span>2023-03-20</span>
            </MainContainer>
        </Card>
    )
}

export default MyPageBoardLike

const MainContainer = styled.div`
    width: 100%;
    height: var(--3x-large);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--large);

    span {
        color: var(--color-sub-gray)
    }
`
