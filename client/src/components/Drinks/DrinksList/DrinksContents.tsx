import React from "react";
import DrinksItem from "./DrinksItem";
import styled from "styled-components";

function DrinksContents() {
  return (
    <ContentsContainer>
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
      <DrinksItem />
    </ContentsContainer>
  );
}

export default DrinksContents;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`;
