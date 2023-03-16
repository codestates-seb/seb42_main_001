import React from 'react'
import styled from 'styled-components'
import ArticleDetailContent from './ArticleDetailContent'
import ArticleDetailMenu from './ArticleDetailMenu'

function ArticleDetails() {
    return (
        <MainContainer>
            <FlexMenu>
                <ArticleDetailMenu />
            </FlexMenu>
            <FlexContent>
                <ArticleDetailContent />
            </FlexContent>
        </MainContainer>
    )
}

export default ArticleDetails

const MainContainer = styled.div`
    width: 100%;
    height: 100vmax;
    display: flex;
    align-items: flex-start;
`

const FlexMenu = styled.div`
    flex: 3;
    padding-right: var(--5x-large);
`

const FlexContent = styled.div`
    flex: 7;
`