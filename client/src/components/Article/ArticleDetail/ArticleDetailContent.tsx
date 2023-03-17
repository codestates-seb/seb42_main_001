import React from 'react'
import ArticleDetailBody from './ArticleDetailBody'
import ArticleDetailTitle from './ArticleDetailTitle'
import styled from 'styled-components'
import Card from '../../UI/Card'

function ArticleDetailContent() {
    return (
        <MainContainer>
            <Card>
                <SizeContainer>
                    <ArticleDetailTitle />
                    <ArticleDetailBody />
                </SizeContainer>
            </Card>
        </MainContainer>
    )
}

export default ArticleDetailContent

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const SizeContainer = styled.div`
    width: 100%;
    height: 100%;
`