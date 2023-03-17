import React from 'react'
import ArticleDetailMenuItem from './ArticleDetailMenuItem'
import styled from 'styled-components'

interface MenuProps {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function ArticleDetailMenu({ onClick }: MenuProps) {

    return (
        <MainContainer>
            <ArticleDetailMenuItem title={`❶ 인트로`} value={'1'} onClick={onClick} />
            <ArticleDetailMenuItem title={`❷ 여정을 떠나기 위한 준비`} value={'2'} onClick={onClick} />
            <ArticleDetailMenuItem title={`❸ 아! 위스키. 생명의 물이여.`} value={'3'} onClick={onClick} />
            <ArticleDetailMenuItem title={`❹ 위스키 만드는 과정 Part 1`} value={'4'} onClick={onClick} />
            <ArticleDetailMenuItem title={`❺ 위스키 만드는 과정 Part 2`} value={'5'} onClick={onClick} />
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