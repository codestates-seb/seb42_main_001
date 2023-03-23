import React from "react";
import DrinksLikes from "./DrinksItemLikes";
import DrinksItemTags from "./DrinksItemTags";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IDrinksProps } from "../../../interfaces/drinks.inerface";

function DrinksItemBox({ drinksData }: IDrinksProps) {

  return (
    <InfoContainer>
      <DrinksLikes drinksData={drinksData} />
      <TagContainer>
        {drinksData?.tags.map(el => {
          return (
            <Link key={el.tagId} to={`/tags/${el.tagId}`}>
              <DrinksItemTags drinksData={el} />
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
  justify-content: flex-end;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`