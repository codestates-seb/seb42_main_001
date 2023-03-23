import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';

import BoardAuthorInfo from '../components/Board/BoardAuthorInfo';
import BoardDetailTitle from '../components/Board/BoardDetailTitle';
import BoardLikes from '../components/Board/BoardLikes';
import BoardComments from '../components/Board/BoardComments';
import More from '../components/UI/More';
import BoardDetailContents from '../components/Board/BoardDetailContents';
import BoardTags from '../components/Board/BoardTags';
import Comment from '../components/UI/Comment/Comment';
import CommentInput from '../components/UI/Comment/CommentInput';
import BoardSuggest from '../components/Board/BoardSuggest';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CommentModal from '../components/UI/Comment/CommentModal';
import Loading from '../components/UI/Loading';
import { getBoardDetailData } from '../redux/slice/board/boardDetail';
import { IComments } from '../util/interfaces/boards.interface';

function BoardDetail() {
  const { boardId } = useParams();
  const [isLoding, setIsLoding] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.boardDetail.detailData);

  useEffect(() => {
    const boardData = async () => {
      const res = await axios.get(`/boards/${boardId}`);
      const listData = await axios.get(`/boards?page=1&size=16`);
      const likeList = listData.data.likeList;
      dispatch(getBoardDetailData({ data: res.data, likeList }));
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
            <Link to={`/member/${data?.memberId}`}>
              <BoardAuthorInfo
                userName={data?.memberName}
                userImage={data?.profileImageUrl}
                date={data?.createdAt}
              />
            </Link>
            <BoardDetailHeader>
              <BoardDetailTitle />
              <BoardDetailController>
                <BoardLikes
                  like={data?.likeCount}
                  boardId={data.boardId}
                  likes={data.like}
                />
                <BoardComments comment={data?.commentCount} />
                <More handleModalOpen={handleModalOpen} />
                {isOpen ? (
                  <CommentModal
                    boardId={data?.boardId}
                    handleBoardEdit={handleBoardEdit}
                    handleModalOpen={handleModalOpen}
                  />
                ) : null}
              </BoardDetailController>
            </BoardDetailHeader>
            <BoardDetailBody>
              <BoardDetailContents />
              <BoardTags tags={data.tags} />
            </BoardDetailBody>
          </BoardDetailContainer>
          <BoardCommentsContainer>
            <CommentsCount>{`Comments ${data?.commentCount}`}</CommentsCount>
            <CommentInputContainer>
              <CommentInput boardId={data?.boardId} />
            </CommentInputContainer>
            <ListContainer>
              {data?.comments.map((el: IComments) => {
                return <Comment key={el.commentId} comments={el} />;
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
  }
`;

const BoardDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--2x-large) 0;
`;

const BoardDetailController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
`;

const CommentsCount = styled.div`
  font-weight: var(--weight-large);
  font-size: var(--text-small);
  line-height: 16px;
`;
