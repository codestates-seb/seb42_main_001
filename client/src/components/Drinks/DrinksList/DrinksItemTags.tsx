import React from "react";
import styled from "styled-components";
import { DrinksTagsProps } from "../../../interfaces/Drinks.inerface";

function DrinksItemTags({ drinksData }: DrinksTagsProps) {

  return (
    <TagsContainer>
      <div></div>
    </TagsContainer>
  );
}

export default DrinksItemTags;

const TagsContainer = styled.div`
  display: flex;
  cursor: pointer;
  div {
    color: var(--color-sub-dark-gray);
    font-size: var(--text-x-small);
    border: 1px solid var(--color-sub-dark-gray);
    border-radius: var(--medium);
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: var(--3x-small);
    padding: var(--2x-small);
  }
`;