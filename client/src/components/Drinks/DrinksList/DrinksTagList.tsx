import React from "react";
import styled from "styled-components";
import DrinksTags from "./DrinksTags";

function DrinksTagList() {
  return (
    <>
      <TagListContainer>
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
        <DrinksTags />
      </TagListContainer>
      <PageButton>{`>`}</PageButton>
    </>
  );
}

export default DrinksTagList;

const TagListContainer = styled.div`
  display: flex;
  width: 85%;
  overflow: overlay;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PageButton = styled.div`
  color: var(--color-main);
  background-color: var(--color-white);
  border: 1px solid var(--color-main);
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--large);
  cursor: pointer;

  svg {
    font-size: var(--text-large);
  }
`;
