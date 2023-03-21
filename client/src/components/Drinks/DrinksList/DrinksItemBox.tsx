import React from "react";
import DrinksLikes from "./DrinksItemLikes";
import DrinksItemTags from "./DrinksItemTags";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DrinksProps } from "../../../interfaces/Drinks.inerface";

function DrinksItemBox({ drinksData, likesData }: DrinksProps) {

  return (
    <InfoContainer>
      <DrinksLikes drinksData={drinksData} likesData={likesData} />
      <TagContainer>
        {drinksData?.tags.map(el => {
          return (
            <Link to={`/tags/${el.tagId}`}>
              <DrinksItemTags key={el.tagId} drinksData={el} />
            </Link>
          )
        })}
      </TagContainer>
    </InfoContainer>
  );
}

export default DrinksItemBox;

const InfoContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--large) var(--large) 0 var(--large);
`;

const TagContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;

  // TODO: CSS mask
  background-image:
  linear-gradient(-45deg, #ffffff 25%);

  &::-webkit-scrollbar {
    display: none;
  }
`