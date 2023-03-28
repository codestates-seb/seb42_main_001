import React from "react";
import styled from "styled-components";
import DrinksDetailWith from "./drinksdetailwiths/DrinksDetailWith";
import DrinksDetailWithTitle from "./drinksdetailwiths/DrinksDetailWithTitle";
import { IDrinksDetailProps } from '../../../../util/interfaces/drinks.inerface'
import { Link } from "react-router-dom";

function DrinksDetailWiths({ drinksDetail }: IDrinksDetailProps) {

  return (
    <div>
      <DrinksDetailWithTitle />
      <WithContainer>
        {drinksDetail?.recommandDrinks.map(el => {
          return (
            <Link key={el.drinkId} to={`/drinks/${el.drinkId}`}>
              <DrinksDetailWith drinksDetail={el} />
            </Link>
          )
        })}
      </WithContainer>
    </div>
  );
}

export default DrinksDetailWiths;

const WithContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
`;
