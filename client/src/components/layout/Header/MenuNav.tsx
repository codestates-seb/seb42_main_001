import React from 'react'
import styled from 'styled-components'

function MenuNav() {
  return (
    <MenuStyled>
      <MenuItemStyled>Article</MenuItemStyled>
      <MenuItemStyled>Drinks</MenuItemStyled>
      <MenuItemStyled>Board</MenuItemStyled>
    </MenuStyled>
  )
}

export default MenuNav

const MenuStyled = styled.div`
    font-size: var(--small-size);
    display: flex;
`

const MenuItemStyled = styled.div`
    margin: 0 35px;
`