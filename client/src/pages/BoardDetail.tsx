import styled from 'styled-components';

import BoardAuthorInfo from '../components/board/BoardAuthorInfo';
import BoardDetailTitle from '../components/board/BoardDetailTitle';
import BoardLikes from '../components/board/BoardLikes';
import BoardComments from '../components/board/BoardComments';
import More from '../components/UI/More';
import BoardDetailContents from '../components/board/BoardDetailContents';
import BoardTags from '../components/board/BoardTags';
import Comment from '../components/UI/Comment';

function BoardDetail() {
  return (
    <Wrapper>
      <BoardDetailContainer>
        <BoardAuthorInfo></BoardAuthorInfo>
        <BoardDetailHeader>
          <BoardDetailTitle></BoardDetailTitle>
          <BoardDetailController>
            <BoardLikes></BoardLikes>
            <BoardComments></BoardComments>
            <More></More>
          </BoardDetailController>
        </BoardDetailHeader>
        <BoardDetailBody>
          <BoardDetailContents></BoardDetailContents>
          <BoardTags></BoardTags>
        </BoardDetailBody>
      </BoardDetailContainer>
      <BoardCommentsContainer>
        <Comment></Comment>
      </BoardCommentsContainer>
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

const BoardDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #bababa;
`;

const BoardDetailController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardDetailBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
