import styled from 'styled-components';

import BoardTag from './BoardTag';

function BoardTags() {
  return (
    <TagsContainer>
      <BoardTag />
    </TagsContainer>
  );
}

export default BoardTags;

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
`;
