import styled from 'styled-components';

import BoardCreateTag from './BoardCreateTag';

interface BoardCreateTagsProps {
  tags: Array<{ tagId: number; tagName: string }>;
  handleTagRemove: (ele: { tagId: number; tagName: string }) => void;
}

function BoardCreateTags({ tags, handleTagRemove }: BoardCreateTagsProps) {
  return (
    <ListContainer>
      {tags.map((el) => (
        <BoardCreateTag key={el.tagId} ele={el} onClick={handleTagRemove} />
      ))}
    </ListContainer>
  );
}

export default BoardCreateTags;

const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 30vw;
    overflow-x: scroll;
  }
`;
