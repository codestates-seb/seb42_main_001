import React, { useState } from 'react'
import Card from '../UI/Card'
import MyPageContentBar from './MyPageContentBar'
import styled from 'styled-components'
import MyPageBoardBox from './MyPageBoardBox'

function MyPageBoard() {
    const [selectedBar, setSelectedBar] = useState(false)

    return (
        <MarginContainer>
            <Card>
                <MainContainer>
                    <Title>Board</Title>
                    <MyPageContentBar setSelectedBar={setSelectedBar} />
                    <MyPageBoardBox selectedBar={selectedBar} />
                </MainContainer>
            </Card>
        </MarginContainer>
    )
}

export default MyPageBoard

const MarginContainer = styled.div`
    width: 100%;
    margin-left: var(--x-small);
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: var(--x-large);
`

const Title = styled.div`
    font-weight: var(--weight-medium);
    margin-bottom: var(--large);
`