import React from "react";
import styled from "styled-components";

function DrinksTags() {
  return (
    <TagsContainer>
      <div>데이트</div>
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
  margin-right: var(--medium);

  div {
    width: 70px;
    font-size: var(--text-small);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
