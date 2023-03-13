import styled from 'styled-components';

import BoardCreate from '../components/board/BoardCreate';
import BoardItem from '../components/board/BoardItem';
import BoardSearch from '../components/board/BoardSearch';

function BoardList() {
  return (
    <Wrapper>
      <ControllerContainer>
        <BoardCreate></BoardCreate>
        <BoardSearch></BoardSearch>
      </ControllerContainer>
      <ListContainer>
        <BoardItem></BoardItem>
        <BoardItem></BoardItem>
        <BoardItem></BoardItem>
        <BoardItem></BoardItem>
      </ListContainer>
    </Wrapper>
  );
}

export default BoardList;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControllerContainer = styled.div`
  width: 100%;
  margin: 65px 0 65px 0;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px 30px;
`;
