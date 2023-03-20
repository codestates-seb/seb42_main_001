import React from 'react'
import styled from 'styled-components'

function MyPageInfoItem() {
    return (
        <MainContainer>
            <ItemContainer>정보 수정</ItemContainer>
            <ItemContainer>로그아웃</ItemContainer>
            <ItemContainer>회원 탈퇴</ItemContainer>
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