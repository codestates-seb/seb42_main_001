import React from "react";
import styled from "styled-components";

interface Tags {
  tagId: number;
  tagName?: string;
  onClick?: () => void;
  setSearchTag: (state: number) => void;
};


function DrinksTags({ tagId, tagName, setSearchTag }: Tags) {

  const handleTagSearchValueChange = () => {
    setSearchTag(tagId)
  }

  return (
    <TagsContainer>
      <div onClick={handleTagSearchValueChange}>{tagName}</div>
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
