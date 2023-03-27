import React from "react";
import styled from "styled-components";

interface ITagProps {
  tagName: string;
}

function DrinksDetailTags({ tagName }: ITagProps) {
  return (
    <TagsContainer>
      <div>{tagName}</div>
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
    margin-right: var(--3x-small);
    padding: var(--2x-small);
    transition: .5s;

    &:hover {
      transition: .5s;
      background-color: var(--color-main);
      color: var(--color-white);
      border: 1px solid var(--color-main);
    }
  }
`;
