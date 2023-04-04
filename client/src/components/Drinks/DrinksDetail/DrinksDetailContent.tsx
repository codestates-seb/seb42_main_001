import React from "react";
import styled from "styled-components";
import DrinksDetailSnacks from "./drinksdetailcontent/DrinksDetailSnacks";
import DrinksDetailTasting from "./drinksdetailcontent/DrinksDetailTasting";
import DrinksDetailWiths from "./drinksdetailcontent/DrinksDetailWiths";
import { IDrinksDetailProps } from '../../../util/interfaces/drinks.inerface'

function DrinksDetailContent({ drinksDetail }: IDrinksDetailProps) {
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
  margin-top: var(--2x-large);
  margin-bottom: var(--1x-large);

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
