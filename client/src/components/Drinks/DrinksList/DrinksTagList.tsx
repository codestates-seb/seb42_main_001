import React, { useRef } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import DrinksTags from "./DrinksTags";

function DrinksTagList() {
  const homeRef = useRef<HTMLDivElement>(null);

  const scrollToSide = () => {
    homeRef.current?.scrollTo({ left: 1000, top: 0, behavior: "smooth" });
  };

  const scrollToBack = () => {
    homeRef.current?.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <DisplayContainer>
      <Button
        type="button"
        width={`--x-large`}
        radius={`--large`}
        onClick={scrollToBack}
        borderColor={`--color-main`}
      >{`<`}</Button>
      <TagListContainer ref={homeRef}>
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
        onClick={scrollToSide}
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