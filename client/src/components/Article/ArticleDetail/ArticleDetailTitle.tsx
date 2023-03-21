import React from 'react'
import styled from 'styled-components'

function ArticleDetailTitle() {
    return (
        <MainContainer>
            인트로
        </MainContainer>
    )
}

export default ArticleDetailTitle

const MainContainer = styled.div`
    color: var(--color-main);
    width: 100%;
    padding: var(--2x-large);
    font-size: var(--x-large);
    font-weight: var(--weight-medium);
    border-bottom: 1px solid var(--color-sub-light-gray);
`