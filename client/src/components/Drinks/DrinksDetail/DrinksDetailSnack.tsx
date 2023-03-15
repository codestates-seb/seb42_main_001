import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";

function DrinksDetailSnack() {
  return (
    <SnackContainer>
      <Card>
        <div>img</div>
      </Card>
      <span>치즈</span>
    </SnackContainer>
  );
}

export default DrinksDetailSnack;

const SnackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 var(--x-large) var(--xx-large) var(--x-large);

  div {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white);
    border-radius: var(--xxx-large);
  }

  span {
    margin-top: var(--small);
    font-size: var(--x-small);
  }
`;
