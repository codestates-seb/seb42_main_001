import React from "react";
import styled from "styled-components";

interface ITagProps {
  tagName: string;
}

function DrinksDetailTags({ tagName }: ITagProps) {
  return (
    <MainContainer>
      <TagsContainer>{tagName}</TagsContainer>
    </MainContainer>
  );
}

export default DrinksDetailTags;

const MainContainer = styled.div`
  display: flex;
`;

const TagsContainer = styled.div`
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

    @media only screen and (max-width: 768px) {
      color: var(--color-main);
      font-size: var(--text-small);
      border: 1px solid var(--color-main);
      border-radius: var(--medium);
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: var(--3x-small);
      padding: var(--2x-small);
  }
`
