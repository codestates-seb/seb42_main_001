import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import BoardAuthorInfo from "../components/Board/BoardAuthorInfo";
import BoardDetailTitle from "../components/Board/BoardDetailTitle";
import BoardLikes from "../components/Board/BoardLikes";
import BoardComments from "../components/Board/BoardComments";
import More from "../components/UI/More";
import BoardDetailContents from "../components/Board/BoardDetailContents";
import BoardTags from "../components/Board/BoardTags";
import Comment from "../components/UI/Comment/Comment";
import CommentInput from "../components/UI/Comment/CommentInput";
import BoardSuggest from "../components/Board/BoardSuggest";
import axios from "axios";
import { Link } from "react-router-dom";

interface Data {
  boardId: number;
  boardImages: Array<{
    imageId: number;
    imageUrl: string;
  }>;
  boardTitle: string;
  content: string;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
  createdAt: string;
  modifiedAt: string;
  likeCount: number;
  commentCount: number;
  tags: Array<{
    tagId: number;
    tagName: string;
  }>;
  recommandBoards: Array<{
    boardId: number;
    boardTitle: string;
  }>;
  comments: Array<{
    commentId: number;
    memberId: number;
    displayName: string;
    commentContent: string;
    createAt: string;
  }>;
}

function BoardDetail() {
  const { boardId } = useParams();
  const [data, setData] = useState<Data>();
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    const boardData = async () => {
      const res = await axios.get(`/boards/${boardId}`);
      setData(res.data);
    };
    boardData();
    setIsLoding(true);
  }, [boardId]);

  return (
    <>
      {isLoding ? (
        <Wrapper>
          <BoardSuggest recommandBoards={data?.recommandBoards} />
          <BoardDetailContainer>
            <Link to={`/member/${data?.memberId}`}>
              <BoardAuthorInfo
                userName={data?.memberName}
                userImage={data?.profileImageUrl}
                date={data?.createdAt}
              />
            </Link>
            <BoardDetailHeader>
              <BoardDetailTitle title={data?.boardTitle} />
              <BoardDetailController>
                <BoardLikes like={data?.likeCount} />
                <BoardComments comment={data?.commentCount} />
                <More />
              </BoardDetailController>
            </BoardDetailHeader>
            <BoardDetailBody>
              <BoardDetailContents content={data?.content} />
              <BoardTags tags={data?.tags} />
            </BoardDetailBody>
          </BoardDetailContainer>
          <BoardCommentsContainer>
            <CommentsCount>{`Comments ${data?.commentCount}`}</CommentsCount>
            <CommentInputContainer>
              <CommentInput />
            </CommentInputContainer>
            <ListContainer>
              {data?.comments.map((el) => {
                return <Comment key={el.commentId} comments={el} />;
              })}
            </ListContainer>
          </BoardCommentsContainer>
        </Wrapper>
      ) : (
        <div></div>
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
  margin-top: var(--3x-large);
  padding: var(--xx-large);
  background-color: var(--color-white);
  border: 1px solid var(--color-main);
  border-top-left-radius: var(--xx-small);
  border-top-right-radius: var(--xx-small);
  border-bottom: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BoardCommentsContainer = styled.div`
  width: calc(100% / 18 * 12);
  margin-bottom: var(--3x-large);
  padding: var(--xx-large);
  background-color: var(--color-white);
  border: 1px solid var(--color-main);
  border-top: 1px solid var(--color-sub-light-gray);
  border-bottom-left-radius: var(--xx-small);
  border-bottom-right-radius: var(--xx-small);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const BoardDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--xx-large) 0;
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
  margin-top: var(--x-small);
`;

const CommentsCount = styled.div`
  font-weight: var(--weight-large);
  font-size: var(--text-small);
  line-height: 16px;
`;
