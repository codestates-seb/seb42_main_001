import React from "react";
import DrinksInfo from "./DrinksInfo";
import DrinksBody from "./DrinksBody";
import DrinksLevel from "./DrinksLevel";
import Card from "../../UI/Card";
import styled from "styled-components";

function DrinksItem() {
  return (
    <Card>
      <ItemContainer>
        <DrinksInfo />
        <DrinksBody />
        <DrinksLevel />
      </ItemContainer>
    </Card>
  );
}

export default DrinksItem;

const ItemContainer = styled.div`
  width: 320px;
  height: 495px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
