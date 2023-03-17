import React from "react";
import styled from "styled-components";
import DrinksDetailSnacks from "./DrinksDetailSnacks";
import DrinksDetailTasting from "./DrinksDetailTasting";
import DrinksDetailWiths from "./DrinksDetailWiths";

function DrinksDetailContent() {
  return (
    <ContentContainer>
      <BottomMargin>
        <DrinksDetailTasting />
      </BottomMargin>
      <BottomMargin>
        <DrinksDetailSnacks />
      </BottomMargin>
      <BottomMargin>
        <DrinksDetailWiths />
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
  margin-bottom: var(--4x-large);

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: var(--3x-large) 0;
  }
`;
