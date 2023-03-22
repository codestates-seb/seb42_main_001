import React from "react";
import styled from "styled-components";
import { DrinksTagsProps } from "../../../interfaces/drinkss.inerface";

function DrinksItemTags({ drinksData }: DrinksTagsProps) {

  return (
    <Margin>

      <TagsContainer>
        <div>{drinksData?.tagName}</div>
      </TagsContainer>
    </Margin>
  );
}

export default DrinksItemTags;

const Margin = styled.div`
  margin-left: 5px;
`

const TagsContainer = styled.div`
  cursor: pointer;
  width: 100%;
  
  div {
    color: var(--color-sub-dark-gray);
    font-size: var(--text-x-small);
    border: 1px solid var(--color-sub-dark-gray);
    border-radius: var(--medium);
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 7px;
    white-space: nowrap;
    transition: .5s;

    &:hover {
      transition: .5s;
      background-color: var(--color-main);
      color: var(--color-white);
      border: 1px solid var(--color-main);
    }
  }
`;