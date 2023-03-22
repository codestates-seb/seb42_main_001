import React from "react";
import DrinksDetailSnack from "./DrinksDetailSnack";
import DrinksDetailSnackTitle from "./DrinksDetailSnackTitle";
import styled from "styled-components";
import { DrinksDetailProps } from '../../../interfaces/drinks.inerface'

function DrinksDetailSnacks({ drinksDetail }: DrinksDetailProps) {

  return (
    <SnackContainer>
      <DrinksDetailSnackTitle />
      <SnackFlex>
        {drinksDetail?.snacks?.map(el => {
          return (
            <DrinksDetailSnack key={el.snackInfo} drinksDetail={el} />
          )
        })}
      </SnackFlex>
    </SnackContainer>
  );
}

export default DrinksDetailSnacks;

const SnackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
`;

const SnackFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
`;
