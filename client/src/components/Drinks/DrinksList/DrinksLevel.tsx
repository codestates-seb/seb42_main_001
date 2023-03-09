import React from 'react'
import styled from 'styled-components'

function DrinksLevel() {
  return (
    <LevelContainer>
      Entry-Level
    </LevelContainer>
  )
}

export default DrinksLevel

const LevelContainer = styled.div`
  font-size: var(--text-x-small);
  color: var(--color-sub-light-gray);
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding-small);
  border-top: 1px solid var(--color-sub-light-gray);
`