import React from 'react'
import styled from 'styled-components'

function TopButton() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <TopButtonStyled onClick={scrollToTop}>
      ^
    </TopButtonStyled>
  )
}

export default TopButton

const TopButtonStyled = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid var(--color-sub-dark-gray);
    border-radius: 50%;
    background-color: transparent;
    color: var(--color-sub-dark-gray);
`