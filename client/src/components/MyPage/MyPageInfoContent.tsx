import React from 'react'
import styled from 'styled-components'
import { BsPlusCircle } from 'react-icons/bs'

function MyPageInfoContent() {
    return (
        <MainContainer>
            <ImgContainer>
                <BsPlusCircle />
            </ImgContainer>
            <TextContainer>
                <Name>lapmu</Name>
                <Text>자기소개 한 마디</Text>
            </TextContainer>
        </MainContainer>
    )
}

export default MyPageInfoContent

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const ImgContainer = styled.div`
    width: 160px;
    height: 160px;
    background-color: var(--color-sub-light-gray);
    border-radius: var(--3x-large);
    cursor: pointer;
    transition: .5s;

    svg {
        display: none;
        background-color: red;

        &:hover {
        display: block;
        background-color: red;
        }
    }

    &:hover {
        transition: .5s;
        background-color: var(--color-sub-gray);
    }
`

const Name = styled.div`
    width: 100%;
    height: var(--large);
    font-size: var(--text-medium);
`

const Text = styled.div`
    width: 100%;
    font-weight: var(--weight-medium);
    font-size: var(--text-large);
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: var(--large);
`