import React from 'react'
import styled from 'styled-components'

function DrinksBody() {
  return (
    <BodyContainer>
      <div>img</div>
      <span>몽키 숄더</span>
    </BodyContainer>
  )
}

export default DrinksBody

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: var(--padding-large);

    div {
      background-color: #f1f1f1;
      width: 100%;
      height: 100%;
    }

    span {
      margin-top: var(--padding-large);
      font-size: var(--text-medium);
      font-weight: var(--weight-large);
    }

`