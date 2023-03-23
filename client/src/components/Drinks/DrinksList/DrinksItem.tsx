import React from "react";
import DrinksItemBox from "./DrinksItemBox";
import DrinksItemBody from "./DrinksItemBody";
import DrinksItemLevel from "./DrinksItemLevel";
import Card from "../../UI/Card";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IDrinksProps } from "../../../interfaces/drinks.inerface";

function DrinksItem({ drinksData, likesData }: IDrinksProps) {
  return (
    <Margin>
      <Card>
        <ItemContainer>
          <DrinksItemBox drinksData={drinksData} likesData={likesData} />
          <SubContainer>
            <Link to={`/drinks/${drinksData.drinkId}`}>
              <DrinksItemBody drinksData={drinksData} />
              <DrinksItemLevel drinksData={drinksData} />
            </Link>
          </SubContainer>
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
  transition: .4s;

  &:hover {
    transition: .4s;
    border-radius: 10px;
    box-shadow: 0px 0px 20px #473f3f73;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SubContainer = styled.div`
  height: 100%;
`