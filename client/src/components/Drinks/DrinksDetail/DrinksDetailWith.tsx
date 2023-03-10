import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";

function DrinksDetailWith() {
  return (
    <SnackContainer>
      <Card>
        <div>img</div>
      </Card>
      <span>몽키 숄더</span>
    </SnackContainer>
  );
}

export default DrinksDetailWith;

const SnackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--x-small);
  }

  span {
    font-size: var(--x-small)
  }
`;
