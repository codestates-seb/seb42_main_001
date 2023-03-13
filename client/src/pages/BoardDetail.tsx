import styled from 'styled-components';

import BoardAuthorInfo from '../components/Board/BoardAuthorInfo';

function BoardDetail() {
  return (
    <Wrapper>
      <BoardDetailContainer>
        <BoardAuthorInfo></BoardAuthorInfo>
      </BoardDetailContainer>
      <BoardCommentsContainer></BoardCommentsContainer>
    </Wrapper>
  );
}

export default BoardDetail;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoardDetailContainer = styled.div`
  background-color: var(--color-white);
`;

const BoardCommentsContainer = styled.div`
  background-color: var(--color-sub-gray);
`;
