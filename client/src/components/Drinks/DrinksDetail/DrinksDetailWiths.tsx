import React from "react";
import styled from "styled-components";
import DrinksDetailWith from "./DrinksDetailWith";
import DrinksDetailWithTitle from "./DrinksDetailWithTitle";

function DrinksDetailWiths() {
  return (
    <div>
      <DrinksDetailWithTitle />
      <WithContainer>
        <DrinksDetailWith />
        <DrinksDetailWith />
        <DrinksDetailWith />
        <DrinksDetailWith />
        <DrinksDetailWith />
        <DrinksDetailWith />
      </WithContainer>
    </div>
  );
}

export default DrinksDetailWiths;

const WithContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
`;
