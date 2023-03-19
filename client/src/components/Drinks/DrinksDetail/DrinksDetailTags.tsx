import React from "react";
import styled from "styled-components";
import { DrinksDetailProps } from '../../../interfaces/Drinks.inerface'

function DrinksDetailTags({ drinksDetail }: DrinksDetailProps) {
  return (
    <TagsContainer>
      <div>#tag</div>
    </TagsContainer>
  );
}

export default DrinksDetailTags;

const TagsContainer = styled.div`
  display: flex;

  div {
    color: var(--color-main);
    font-size: var(--text-x-small);
    border: 1px solid var(--color-main);
    border-radius: var(--medium);
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--xxx-small);
    padding: var(--xx-small);
  }
`;
