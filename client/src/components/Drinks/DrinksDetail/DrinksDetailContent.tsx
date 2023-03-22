import React from "react";
import styled from "styled-components";
import DrinksDetailSnacks from "./DrinksDetailSnacks";
import DrinksDetailTasting from "./DrinksDetailTasting";
import DrinksDetailWiths from "./DrinksDetailWiths";
import { DrinksDetailProps } from '../../../interfaces/drinks.inerface'

function DrinksDetailContent({ drinksDetail }: DrinksDetailProps) {
  return (
    <ContentContainer>
      <BottomMargin>
        <DrinksDetailTasting drinksDetail={drinksDetail} />
      </BottomMargin>
      <BottomMargin>
        <DrinksDetailSnacks drinksDetail={drinksDetail} />
      </BottomMargin>
      <BottomMargin>
        <DrinksDetailWiths drinksDetail={drinksDetail} />
      </BottomMargin>
    </ContentContainer>
  );
}

export default DrinksDetailContent;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BottomMargin = styled.div`
  margin-top: var(--4x-large);
  margin-bottom: var(--1x-large);

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: var(--3x-large) 0;
  }
`;
