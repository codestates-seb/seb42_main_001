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
  align-items: center;
  justify-content: space-between;
  padding: var(--large) var(--large) 0 var(--large);
`;


const TagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`