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
  margin-right: var(--xx-samll);
`;

const Size = styled.div`
  width: 100%;
`