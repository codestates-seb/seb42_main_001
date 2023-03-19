import React from "react";
import DrinksDetailLikes from "./DrinksDetailLikes";
import DrinksDetailTags from "./DrinksDetailTags";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'

function DrinksDetailBox({ drinksDetail }: DrinksDetailProps) {

  return (
    <BoxContainer>
      {drinksDetail?.tags?.map(el => {
        return (
          <Link to={`/tags/${el.tagId}`}>
            <DrinksDetailTags key={el.tagId} drinksDetail={drinksDetail} />
          </Link>
        )
      })}
      <DrinksDetailLikes />
    </BoxContainer>
  );
}

export default DrinksDetailBox;

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
