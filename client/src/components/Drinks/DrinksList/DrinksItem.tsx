import React from "react";
import DrinksItemBox from "./DrinksItemBox";
import DrinksItemBody from "./DrinksItemBody";
import DrinksItemLevel from "./DrinksItemLevel";
import Card from "../../UI/Card";
import styled from "styled-components";
import { DrinksProps } from "../../../interfaces/Drinks.inerface";
import { Link } from "react-router-dom";

function DrinksItem({ drinksData, likesData }: DrinksProps) {
  return (
    <Margin>
      <Card>
        <ItemContainer>
          <DrinksItemBox drinksData={drinksData} likesData={likesData} />
          <Link to={`/drinks/${drinksData.drinkId}`}>
            <DrinksItemBody drinksData={drinksData} />
          </Link>
          <DrinksItemLevel drinksData={drinksData} />
        </ItemContainer>
      </Card>
    </Margin>
  );
}

export default DrinksItem;

const Margin = styled.div`
  margin: 0 calc(var(--large) / 2) calc(var(--4x-large) / 2) calc(var(--large) / 2);
`;

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
