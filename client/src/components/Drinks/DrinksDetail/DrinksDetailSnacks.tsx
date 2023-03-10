import React from "react";
import DrinksDetailSnack from "./DrinksDetailSnack";
import DrinksDetailSnackTitle from "./DrinksDetailSnackTitle";
import styled from "styled-components";

function DrinksDetailSnacks() {
  return (
    <SnackContainer>
      <DrinksDetailSnackTitle />
      <SnackFlex>
        <DrinksDetailSnack />
        <DrinksDetailSnack />
        <DrinksDetailSnack />
        <DrinksDetailSnack />
        <DrinksDetailSnack />
      </SnackFlex>
    </SnackContainer>
  );
}

export default DrinksDetailSnacks;

const SnackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--medium) 0;
`;

const SnackFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: var(--medium);
`;
