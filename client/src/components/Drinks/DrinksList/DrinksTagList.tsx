import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import DrinksTags from "./DrinksTags";

function DrinksTagList() {
  const pageRef = useRef<HTMLDivElement>(null);

  const handleRightClick = () => {
    pageRef.current?.scrollTo({ left: 500, top: 0, behavior: "smooth" });
  };

  const handleLeftClick = () => {
    pageRef.current?.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <DisplayContainer>
      <Button
        type="button"
        width={`--x-large`}
        radius={`--large`}
        onClick={handleLeftClick}
        borderColor={`--color-main`}
      >{`<`}</Button>
      <TagListContainer ref={pageRef}>
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
      <Button
        type="button"
        width={`--x-large`}
        radius={`--large`}
        onClick={handleRightClick}
        borderColor={`--color-main`}
      >{`>`}</Button>
    </DisplayContainer>
  );
}

export default DrinksTagList;

const TagListContainer = styled.div`
  display: flex;
  width: 90%;
  overflow: overlay;
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

const DisplayContainer = styled.div`
    display: flex;
    width: 95%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`