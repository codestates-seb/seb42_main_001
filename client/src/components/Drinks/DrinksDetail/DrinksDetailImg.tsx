import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";

function DrinksDetailImg() {
  return (
    <Size>
      <Card>
        <ImgContainer>img</ImgContainer>
      </Card>
    </Size>
  );
}

export default DrinksDetailImg;

const ImgContainer = styled.div`
  max-width: 695px;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--xx-small);

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--x-large);
  }
`;

const Size = styled.div`
  width: 100%;
`;
