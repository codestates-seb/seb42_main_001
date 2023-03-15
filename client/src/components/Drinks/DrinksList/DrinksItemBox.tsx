import React from "react";
import DrinksLikes from "./DrinksItemLikes";
import DrinksTags from "./DrinksItemTags";
import styled from "styled-components";

function DrinksItemBox() {
  return (
    <InfoContainer>
      <DrinksLikes />
      <DrinksTags />
    </InfoContainer>
  );
}

export default DrinksItemBox;

const InfoContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--large) var(--large) 0 var(--large);
`;
