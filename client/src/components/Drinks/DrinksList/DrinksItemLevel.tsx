import React from 'react'
import styled from 'styled-components'

function DrinksItemLevel() {
  return (
    <LevelContainer>
      Entry-Level
    </LevelContainer>
  )
}

export default DrinksItemLevel

const LevelContainer = styled.div`
  font-size: var(--text-x-small);
  color: var(--color-sub-gray);
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding-small);
  border-top: 1px solid var(--color-sub-light-gray);
`