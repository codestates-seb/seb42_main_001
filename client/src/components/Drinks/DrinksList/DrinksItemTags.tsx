import React from "react";
import styled from "styled-components";
import { DrinksTagsProps } from "../../../interfaces/Drinks.inerface";

function DrinksItemTags({ drinksData }: DrinksTagsProps) {
  console.log('hello')
  console.log(drinksData)
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
    margin-left: var(--xxx-small);
    padding: var(--xx-small);
  }
`;