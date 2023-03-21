import React from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'

function MyPageDrinkComment() {
    return (
        <Card>
            <MainContainer>
                <span>술 이름</span>
                <p>작성한 댓글 내용</p>
            </MainContainer>
        </Card>
    )
}

export default MyPageDrinkComment

const MainContainer = styled.div`
    width: 100%;
    height: var(--4x-large);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--large);

    span {
        color: var(--color-sub-gray);
        margin-bottom: var(--x-small);
    }
`