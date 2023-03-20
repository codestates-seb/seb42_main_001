import React from 'react'
import styled from 'styled-components'
import MyPageBoardComment from './MyPageBoardComment';
import MyPageBoardLike from './MyPageBoardLike'

interface BarProps {
    selectedBar: boolean;
}

function MyPageBoardBox({ selectedBar }: BarProps) {
    return (
        <MainContainer>
            {selectedBar ? <MyPageBoardComment />
                : <MyPageBoardLike />
            }
        </MainContainer>
    )
}

export default MyPageBoardBox

const MainContainer = styled.div`
    width: 100%;
    height: calc(var(--4x-large) * 5);
`