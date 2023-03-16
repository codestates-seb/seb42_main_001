import React from 'react'
import styled from 'styled-components'
import ArticleDetailBack from '../components/Article/ArticleDetail/ArticleDetailBack'
import ArticleDetails from '../components/Article/ArticleDetail/ArticleDetails'

function ArticleDetail() {
    return (
        <MainContainer>
            <ArticleDetailBack />
            <ArticleDetails />
        </MainContainer>
    )
}

export default ArticleDetail

const MainContainer = styled.div`
    width: 100%;
    background-color: var(--color-main);
`