import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
import convertTime from '../../util/convertTime';

interface MyPageBoardCommentProps {
  board?: string;
  ele: {
    boardId?: number;
    boardTitle?: string;
    createdAt?: string;
    content?: string;
    likeCount?: number;
    commentCount?: number;
    commentId?: number;
    commentContent?: string;
  };
}

function MyPageBoardComment({ board, ele }: MyPageBoardCommentProps) {
  return (
    <Card>
      <MainContainer>
        {board ? (
          <>
            <div>
              <div>{ele.boardTitle}</div>
              <div>{convertTime(ele.createdAt)}</div>
            </div>
            <div>
              <span>{ele.content}</span>
              <div>
                <LikesWrapper>
                  <IoMdHeartEmpty />
                  <LikesCount>{ele.likeCount}</LikesCount>
                </LikesWrapper>
                <CommentsWrapper>
                  <HiOutlineChatBubbleOvalLeft />
                  <CommentsCount>{ele.commentCount}</CommentsCount>
                </CommentsWrapper>
              </div>
            </div>
          </>
        ) : (
          <>
            <span>{ele.boardTitle}</span>
            <div>{ele.commentContent}</div>
          </>
        )}
      </MainContainer>
    </Card>
  );
}

export default MyPageBoardComment;

const MainContainer = styled.div`
  width: 100%;
  height: var(--4x-large);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--large);
  margin-bottom: var(--x-small);

  > span {
    color: var(--color-sub-gray);
    margin-bottom: var(--x-small);
  }

  > div {
    display: flex;
    justify-content: space-between;
    > span {
      color: var(--color-sub-gray);
      margin-top: var(--x-small);
    }
    > div {
      display: flex;
    }
  }
`;

const LikesWrapper = styled.div`
  margin-right: var(--x-small);
  margin-top: var(--x-small);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
    color: var(--color-main);
    font-size: var(--medium);
  }
`;

const LikesCount = styled.div`
  font-size: var(--x-small);
  font-weight: var(--weight-medium);
  color: var(--color-main);
`;

const CommentsWrapper = styled.div`
  margin-top: var(--x-small);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
    color: var(--color-main);
    font-size: var(--medium);
  }
`;

const CommentsCount = styled.div`
  font-size: var(--x-small);
  font-weight: var(--weight-medium);
  color: var(--color-main);
`;
