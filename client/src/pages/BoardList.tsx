import styled from 'styled-components';

import BoardItem from '../components/board/BoardItem';

function BoardList() {
  return (
    <Wrapper>
      <ControllerContainer></ControllerContainer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ControllerContainer = styled.div``;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px 30px;
`;
