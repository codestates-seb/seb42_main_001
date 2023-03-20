import React from 'react'
import styled from 'styled-components'

interface BarProps {
    setSelectedBar: (state: boolean) => void;
}

function MyPageContentBar({ setSelectedBar }: BarProps) {

    const handleTrueChange = () => {
        setSelectedBar(true)
    }

    const handleFalseChange = () => {
        setSelectedBar(false)
    }

    return (
        <MainContainer>
            <BarContainer onClick={handleFalseChange}>Likes</BarContainer>
            <BarContainer onClick={handleTrueChange}>Commnets</BarContainer>
        </MainContainer>
    )
}

export default MyPageContentBar

const MainContainer = styled.div`
    display: flex;
`

const BarContainer = styled.div`
    font-size: var(--x-small);
    color: var(--color-main);
    padding: var(--2x-small) var(--x-small);
    border: 1px solid var(--color-main);
    border-radius: var(--medium);
    margin-right: var(--3x-small);
    margin-bottom: var(--large);
    transition: .5s;
    cursor: pointer;

    &:hover {
        transition: .5s;
        background-color: var(--color-main);
        color: var(--color-white);
    }
`