import styled from 'styled-components';

import BoardAuthorInfo from '../components/board/BoardAuthorInfo';
import BoardDetailTitle from '../components/board/BoardDetailTitle';
import BoardLikes from '../components/board/BoardLikes';
import BoardComments from '../components/board/BoardComments';
import More from '../components/UI/More';
import BoardDetailContents from '../components/board/BoardDetailContents';
import BoardTags from '../components/board/BoardTags';
import Comment from '../components/UI/Comment/Comment';
import CommentInput from '../components/UI/Comment/CommentInput';
import CommentSubmitBtn from '../components/UI/Comment/CommentSubmitBtn';

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
        <CommentsCount>Comments 2</CommentsCount>
        <CommentInputContainer>
          <CommentInput></CommentInput>
          <CommentSubmitBtn></CommentSubmitBtn>
        </CommentInputContainer>
        <ListContainer>
          <Comment></Comment>
          <Comment></Comment>
        </ListContainer>
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
  width: calc(100% / 18 * 12);
  background-color: var(--color-white);
  padding: 105px 0 95px 0;
`;

const BoardCommentsContainer = styled.div`
  width: calc(100% / 18 * 12);
  background-color: var(--color-sub-gray);
  padding: 55px 0 200px 0;
`;

const BoardDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 65px 0 45px 0;
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

const ListContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 25px;
`;

const CommentInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 50px 0;
`;

const CommentsCount = styled.div`
  font-weight: var(--weight-large);
  font-size: var(--text-small);
  line-height: 16px;
`;
