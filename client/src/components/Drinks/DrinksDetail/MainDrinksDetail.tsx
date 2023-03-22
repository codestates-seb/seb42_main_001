import React from "react";
import styled from "styled-components";
import DrinksDetailComment from "./DrinksDetailComment";
import DrinksDetailContent from "./DrinksDetailContent";
import DrinksDetailItem from "./DrinksDetailItem";
import { DrinksDetailProps } from "../../../interfaces/Drinks.inerface";

function MainDrinksDetail({ drinksDetail }: DrinksDetailProps) {
  return (
    <MainDetailContainer>
      <DrinksDetailItem drinksDetail={drinksDetail} />
      <DrinksDetailContent drinksDetail={drinksDetail} />
      <DrinksDetailComment drinksDetail={drinksDetail} />
    </MainDetailContainer>
  );
}

export default MainDrinksDetail;

const MainDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
