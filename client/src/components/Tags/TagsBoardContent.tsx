import styled from "styled-components";
import TagsBoardItem from "./TagsBoardItem";

const TagsBoardContent = () => {
  return (
    <BoardContentContainer>
      <TagsBoardItem />
      <TagsBoardItem />
      <TagsBoardItem />
      <TagsBoardItem />
      <TagsBoardItem />
      <TagsBoardItem />
      <TagsBoardItem />
    </BoardContentContainer>
  );
};

export default TagsBoardContent;

const BoardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--large) var(--large) 0 var(--large);
`;
