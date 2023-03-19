import styled from "styled-components";

import BoardCreateTag from "./BoardCreateTag";

interface BoardCreateTagsProps {
  tags: Array<{ tagId: number; tagName: string }>;
  onClick: (ele: { tagId: number; tagName: string }) => void;
}

function BoardCreateTags({ tags, onClick }: BoardCreateTagsProps) {
  return (
    <ListContainer>
      {tags.map((el) => (
        <BoardCreateTag key={el.tagId} ele={el} onClick={onClick} />
      ))}
    </ListContainer>
  );
}

export default BoardCreateTags;

const ListContainer = styled.ul`
  display: flex;
  align-items: center;
`;
