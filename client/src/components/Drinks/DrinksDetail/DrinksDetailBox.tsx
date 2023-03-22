import React from "react";
import DrinksDetailLikes from "./DrinksDetailLikes";
import DrinksDetailTags from "./DrinksDetailTags";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DrinksDetailProps } from '../../../interfaces/drinks.inerface'
import DrinksDetailCount from "./DrinksDetailCount";

function DrinksDetailBox({ drinksDetail }: DrinksDetailProps) {
  return (
    <BoxContainer>
      <TagContainer>
        {drinksDetail?.tags?.map(el => {
          return (
            <Link to={`/tags/${el.tagId}`}>
              <DrinksDetailTags key={el.tagId} tagName={el.tagName} />
            </Link>
          )
        })}
      </TagContainer>
      <MarginContainer>
        <DrinksDetailLikes />
      </MarginContainer>
      <DrinksDetailCount drinksDetail={drinksDetail} />
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

  @media only screen and (max-width: 768px) {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  }
`;

const TagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
  margin-bottom: var(--medium);
  }
`

const MarginContainer = styled.div`
  margin-right: var(--medium);
`