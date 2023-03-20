import React, { useState } from 'react'
import styled from 'styled-components'

interface InfoProps {
    userInfo: boolean;
    setUserInfo: (state: boolean) => void;
}

function MyPageInfoItem({ userInfo, setUserInfo }: InfoProps) {

    const handleUserTrueChange = () => {
        setUserInfo(true)
    }

    const handleUserFalseChange = () => {
        setUserInfo(false)
    }

    return (
        <MainContainer>

            {userInfo
                ?
                <TrueItemContainer onClick={handleUserFalseChange}>수정 완료</TrueItemContainer>
                :
                <>
                    <ItemContainer onClick={handleUserTrueChange}>정보 수정</ItemContainer>
                    <ItemContainer>로그아웃</ItemContainer>
                    <ItemContainer>회원 탈퇴</ItemContainer>
                </>
            }

        </MainContainer>
    )
}

export default MyPageInfoItem

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const ItemContainer = styled.button`
    width: 100px;
    height: 100px;
    border: none;
    outline: none;
    border-radius: var(--2x-large);
    border: 0.5px solid var(--color-sub-gray);
    font-size: var(--x-small);
    background-color: var(--color-white);
    color: var(--color-sub-gray);
    margin-left: var(--x-small);
    cursor: pointer;
    transition: .5s;

    &:hover {
        transition: .5s;
        color: var(--color-main);
        border: 1px solid var(--color-main);
    }
`

const TrueItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: none;
    outline: none;
    border-radius: var(--2x-large);
    border: 1px solid var(--color-main);
    font-size: var(--x-small);
    background-color: var(--color-main);
    color: var(--color-white);
    cursor: pointer;
    transition: .5s;

    &:hover {
        transition: .5s;
        color: var(--color-main);
        background-color: var(--color-whute);
        border: 1px solid var(--color-main);
    }
`