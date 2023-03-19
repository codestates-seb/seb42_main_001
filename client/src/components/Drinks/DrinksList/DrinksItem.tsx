import React from "react";
import DrinksItemBox from "./DrinksItemBox";
import DrinksItemBody from "./DrinksItemBody";
import DrinksItemLevel from "./DrinksItemLevel";
import Card from "../../UI/Card";
import styled from "styled-components";
import { DrinksProps } from "../../../interfaces/Drinks.inerface";

function DrinksItem({ drinksData, likesData }: DrinksProps) {
  return (
    <Margin>
      <Card>
        <ItemContainer>
          <DrinksItemBox drinksData={drinksData} likesData={likesData} />
          <DrinksItemBody drinksData={drinksData} />
          <DrinksItemLevel drinksData={drinksData} />
        </ItemContainer>
      </Card>
    </Margin>
  );
}

export default DrinksItem;

const ItemContainer = styled.div`
  width: 320px;
  height: 490px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Margin = styled.div`
  margin-bottom: var(--4x-large);
`;
