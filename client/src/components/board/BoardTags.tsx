import styled from 'styled-components';

import BoardTag from './BoardTag';

function BoardTags() {
  return (
    <TagsContainer>
      <BoardTag></BoardTag>
      <BoardTag></BoardTag>
    </TagsContainer>
  );
}

export default BoardTags;

const TagsContainer = styled.div`
  margin: 0 12px 24px 12px;
  display: flex;
  align-items: center;
`;
