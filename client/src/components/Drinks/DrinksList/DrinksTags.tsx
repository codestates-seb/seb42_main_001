import React from "react";
import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";

function DrinksTags() {
  return (
    <TagsContainer>
      <AiFillApple />
      <div>최고의 전망</div>
    </TagsContainer>
  );
}

export default DrinksTags;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 100px;
  background-color: aqua;

  div {
    width: 50px;
    font-size: var(--text-x-small);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
