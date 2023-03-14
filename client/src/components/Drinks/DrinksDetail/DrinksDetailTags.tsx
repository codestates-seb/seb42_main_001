import React from "react";
import styled from "styled-components";

function DrinksDetailTags() {
  return (
    <TagsContainer>
      <div>#효도</div>
      <div>#데이트</div>
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
