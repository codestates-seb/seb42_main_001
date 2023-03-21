import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import DrinksTags from "./DrinksTags";

function DrinksTagList() {
  const [tagPage, setTagPage] = useState(3)
  const pageRef = useRef<HTMLDivElement>(null);

  const handleRightClick = () => {
    setTagPage(prev => prev + 3)
    pageRef.current?.scrollTo({ left: Number(`${tagPage}00`), top: 0, behavior: "smooth" });
  };

  const handleLeftClick = () => {
    if (tagPage < 0) {
      setTagPage(0)
    } else {
      setTagPage(prev => prev - 3)
    }
    pageRef.current?.scrollTo({ left: Number(`${tagPage}00`), top: 0, behavior: "smooth" });
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