import React from "react";
import styled from "styled-components";

function DrinksItemTags() {
  return (
    <TagsContainer>
      <div>#효도</div>
      <div>#데이트</div>
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
