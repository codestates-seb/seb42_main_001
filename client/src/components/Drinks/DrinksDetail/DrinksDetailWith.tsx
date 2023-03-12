import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";

function DrinksDetailWith() {
  return (
    <SnackContainer>
      <Card>
        <div>img</div>
        <span>몽키 숄더</span>
      </Card>
    </SnackContainer>
  );
}

export default DrinksDetailWith;

const SnackContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 var(--large) var(--xx-large) var(--large);

  div {
    width: 210px;
    height: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--x-small);
  }

  span {
    font-size: var(--x-small);
    font-weight: var(--weight-large);
    margin-bottom: var(--medium);
  }
`;
