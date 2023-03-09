import React from "react";
import styled from "styled-components";
import DrinksContents from "./DrinksContents";
import DrinksInfo from "./DrinksInfo";

function MainDrinks() {
  return (
    <MainDrinksContainer>
      <DrinksInfo />
      <DrinksContents />
    </MainDrinksContainer>
  );
}

export default MainDrinks;

const MainDrinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: topz;
`;
