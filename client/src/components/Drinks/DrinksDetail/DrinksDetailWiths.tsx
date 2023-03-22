import React from "react";
import styled from "styled-components";
import DrinksDetailWith from "./DrinksDetailWith";
import DrinksDetailWithTitle from "./DrinksDetailWithTitle";
import { DrinksDetailProps } from '../../../interfaces/drinkss.inerface'
import { Link } from "react-router-dom";

function DrinksDetailWiths({ drinksDetail }: DrinksDetailProps) {

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
