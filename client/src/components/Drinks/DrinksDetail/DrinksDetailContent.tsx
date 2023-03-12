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
  margin-top: var(--xxx-large);
  margin-bottom: var(--xxx-large);
`;
