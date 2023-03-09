import React from "react";
import DrinksDetailLikes from "./DrinksDetailLikes";
import DrinksDetailTags from "./DrinksDetailTags";
import styled from "styled-components";

function DrinksDetailBox() {
  return (
    <BoxContainer>
      <DrinksDetailTags />
      <DrinksDetailLikes />
    </BoxContainer>
  );
}

export default DrinksDetailBox;

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
