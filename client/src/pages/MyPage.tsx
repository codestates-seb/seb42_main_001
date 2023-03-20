import React from 'react'
import styled from 'styled-components'
import MyPageContent from '../components/MyPages/MyPageContent'
import MyPageInfo from '../components/MyPages/MyPageInfo'

function MyPage() {
  return (
    <MainContainer>
      <MyPageInfo />
      <MyPageContent />
    </MainContainer>
  )
}

export default MyPage

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  background-color: var(--color-main);
`