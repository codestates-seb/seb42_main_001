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
    <>
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

  @media only screen and (max-width: 768px) {
    width: 60%;
    display: flex;
    align-items: center;
  }
`;
