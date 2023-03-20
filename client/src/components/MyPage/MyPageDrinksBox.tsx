import React from 'react'
import styled from 'styled-components'
import MyPageDrinkComment from './MyPageDrinkComment';
import MyPageDrinkLike from './MyPageDrinkLike'

interface BoxProps {
    selectedBar: boolean;
}

function MyPageDrinksBox({ selectedBar }: BoxProps) {
    return (
        <MainContainer>
            {selectedBar ? <MyPageDrinkComment />
                : <MyPageDrinkLike />
            }
        </MainContainer>
    )
}

export default MyPageDrinksBox

const MainContainer = styled.div`
    width: 100%;
    height: calc(var(--4x-large) * 5);
`