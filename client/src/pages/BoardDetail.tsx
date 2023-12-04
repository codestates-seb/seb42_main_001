import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';

import BoardAuthorInfo from '../components/board/BoardAuthorInfo';
import BoardDetailTitle from '../components/board/boardDetail/BoardDetailTitle';
import BoardLikes from '../components/board/BoardLikes';
import BoardComments from '../components/board/BoardComments';
import More from '../components/ui/More';
import BoardDetailContents from '../components/board/boardDetail/BoardDetailContents';
import BoardTags from '../components/board/BoardTags';
import Comment from '../components/ui/comment/Comment';
import CommentInput from '../components/ui/comment/CommentInput';
import BoardSuggest from '../components/board/boardDetail/BoardSuggest';
import customAxios from '../api/customAxios';
import CommentModal from '../components/ui/comment/CommentModal';
import Loading from '../components/ui/Loading';
import { getBoardDetailData } from '../redux/slice/board/boardDetail';
import { IComments } from '../util/interfaces/boards.interface';

function BoardDetail() {
  const { boardId } = useParams();
  const [isLoding, setIsLoding] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const boardDetailData = useAppSelector(
    (state) => state.boardDetail.detailData
  );

  useEffect(() => {
    const boardData = async () => {
      const boardData = await customAxios.get(`/boards/${boardId}`);
      const boardListData = await customAxios.get(`/boards?page=1&size=16`);
      const likeListData = boardListData.data.likeList;
      dispatch(
        getBoardDetailData({ data: boardData.data, likeList: likeListData })
      );
      setIsLoding(true);
    };
    boardData();
  }, [boardId, dispatch]);

  const handleModalOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBoardEdit = () => {
    navigate(`/board/edit/${boardId}`);
  };

  return (
    <>
      {isLoding ? (
        <Wrapper>
          <BoardSuggest />
          <BoardDetailContainer>
            <BoardAuthorInfo
              memberName={boardDetailData?.memberName}
              profileImageUrl={boardDetailData?.profileImageUrl}
              createdAt={boardDetailData?.createdAt}
            />
            <BoardDetailHeader>
              <BoardDetailTitle />
              <BoardDetailController>
                <BoardLikes
                  likeCount={boardDetailData?.likeCount}
                  boardId={boardDetailData.boardId}
                  like={boardDetailData.like}
                />
                <BoardComments commentCount={boardDetailData?.commentCount} />
                <More handleModalOpen={handleModalOpen} />
                {isOpen ? (
                  <CommentModal
                    boardId={boardDetailData?.boardId}
                    memberId={boardDetailData.memberId}
                    handleBoardEdit={handleBoardEdit}
                    handleModalOpen={handleModalOpen}
                  />
                ) : null}
              </BoardDetailController>
            </BoardDetailHeader>
            <BoardDetailBody>
              <BoardDetailContents />
              <BoardTags tags={boardDetailData.tags} />
            </BoardDetailBody>
          </BoardDetailContainer>
          <BoardCommentsContainer>
            <CommentsCount>{`Comments ${boardDetailData?.commentCount}`}</CommentsCount>
            <CommentInputContainer>
              <CommentInput boardId={boardDetailData?.boardId} />
            </CommentInputContainer>
            <ListContainer>
              {boardDetailData?.comments.map((comment: IComments) => {
                return <Comment key={comment.commentId} comments={comment} />;
              })}
            </ListContainer>
          </BoardCommentsContainer>
        </Wrapper>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default BoardDetail;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BoardDetailContainer = styled.div`
  width: calc(100% / 18 * 12);
  margin-top: var(--5x-large);
  padding: var(--2x-large);
  background-color: var(--color-white);
  border: 1px solid var(--color-main);
  border-top-left-radius: var(--2x-small);
  border-top-right-radius: var(--2x-small);
  border-bottom: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: var(--large);
  }
`;

const BoardCommentsContainer = styled.div`
  width: calc(100% / 18 * 12);
  margin-bottom: calc(var(--4x-large) * 5);
  padding: var(--2x-large);
  background-color: var(--color-white);
  border: 1px solid var(--color-main);
  border-top: 1px solid var(--color-sub-light-gray);
  border-bottom-left-radius: var(--2x-small);
  border-bottom-right-radius: var(--2x-small);

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: var(--x-small);
  }
`;

const BoardDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--2x-large) 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--large) 0;
  }
`;

const BoardDetailController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding-top: var(--medium);
    justify-content: flex-end;
  }
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
  margin-top: var(--x-small);

  @media only screen and (max-width: 768px) {
    height: 20vh;
  }
`;

const CommentsCount = styled.div`
  font-weight: var(--weight-large);
  font-size: var(--text-small);
  line-height: 16px;

  @media only screen and (max-width: 768px) {
    margin-left: var(--x-small);
  }
`;
