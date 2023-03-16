import React from 'react'
import ArticleDetailMenuItem from './ArticleDetailMenuItem'
import styled from 'styled-components'

console.log('ggg')
function ArticleDetailMenu() {
    return (
        <MainContainer>
            <ArticleDetailMenuItem title={`❶ 인트로`} />
            <ArticleDetailMenuItem title={`❷ 여정을 떠나기 위한 준비`} />
            <ArticleDetailMenuItem title={`❸ 아! 위스키. 생명의 물이여.`} />
            <ArticleDetailMenuItem title={`❹ 위스키 만드는 과정 Part 1`} />
            <ArticleDetailMenuItem title={`❺ 위스키 만드는 과정 Part 2`} />
        </MainContainer>
    )
}

export default ArticleDetailMenu

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`