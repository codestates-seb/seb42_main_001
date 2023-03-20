import React from 'react'
import styled from 'styled-components'
import Card from '../UI/Card'
import MyPageInfoContent from './MyPageInfoContent'
import MyPageInfoItem from './MyPageInfoItem'

function MyPageInfo() {
    return (
        <MarginContainer>
            <Card>
                <MainContainer>
                    <MyPageInfoContent />
                    <MyPageInfoItem />
                </MainContainer>
            </Card>
        </MarginContainer>
    )
}

export default MyPageInfo


const MarginContainer = styled.div`
    margin-top: var(--5x-large);
    margin-bottom: var(--large);
`

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: var(--x-large);
`
