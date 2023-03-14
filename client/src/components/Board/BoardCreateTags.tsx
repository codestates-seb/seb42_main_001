import styled from 'styled-components';

import BoardCreateTag from './BoardCreateTag';

function BoardCreateTags() {
  return (
    <ListContainer>
      <BoardCreateTag></BoardCreateTag>
      <BoardCreateTag></BoardCreateTag>
      <BoardCreateTag></BoardCreateTag>
    </ListContainer>
  );
}

export default BoardCreateTags;

const ListContainer = styled.ul`
  display: flex;
  align-items: center;
`;
