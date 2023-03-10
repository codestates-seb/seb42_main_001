import React from "react";
import styled from "styled-components";
import Card from "../../UI/Card";

function DrinksDetailImg() {
  return (
    <div>
      <Card>
        <ImgContainer>img</ImgContainer>
      </Card>
    </div>
  );
}

export default DrinksDetailImg;

const ImgContainer = styled.div`
  width: 695px;
  height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--xx-samll);
`;
