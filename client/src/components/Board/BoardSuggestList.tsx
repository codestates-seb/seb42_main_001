import styled from 'styled-components';

import BoardSuggestItem from './BoardSuggestItem';

function BoardSuggestList() {
  return (
    <ListContainer>
      <BoardSuggestItem></BoardSuggestItem>
      <BoardSuggestItem></BoardSuggestItem>
      <BoardSuggestItem></BoardSuggestItem>
      <BoardSuggestItem></BoardSuggestItem>
      <BoardSuggestItem></BoardSuggestItem>
      <BoardSuggestItem></BoardSuggestItem>
      <BoardSuggestItem></BoardSuggestItem>
    </ListContainer>
  );
}

export default BoardSuggestList;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
