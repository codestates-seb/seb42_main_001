import React from "react";
import DrinksDetailLikes from "./drinksdetailbox/DrinksDetailLikes";
import DrinksDetailTags from "./drinksdetailbox/DrinksDetailTags";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IDrinksDetailProps } from '../../../../../util/interfaces/drinks.inerface'
import DrinksDetailCount from "./drinksdetailbox/DrinksDetailCount";

function DrinksDetailBox({ drinksDetail }: IDrinksDetailProps) {
  return (
    <BoxContainer>
      <TagContainer>
        {drinksDetail?.tags?.map(el => {
          return (
            <Link to={`/tags/${el.tagId}`} key={el.tagId}>
              <DrinksDetailTags tagName={el.tagName} />
            </Link>
          )
        })}
      </TagContainer>
      <MarginContainer>
        <DrinksDetailLikes drinksDetail={drinksDetail} />
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