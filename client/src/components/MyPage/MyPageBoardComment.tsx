import React from "react";
import styled from "styled-components";
import Card from "../UI/Card";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

interface MyPageBoardCommentProps {
  board?: string;
}

function MyPageBoardComment({ board }: MyPageBoardCommentProps) {
  return (
    <Card>
      <MainContainer>
        {board ? (
          <>
            <div>
              <div>작성한 보드 제목</div>
              <div>2023-03-20</div>
            </div>
            <div>
              <span>작성한 보드 내용</span>
              <div>
                <LikesWrapper>
                  <IoMdHeartEmpty />
                  <LikesCount>0</LikesCount>
                </LikesWrapper>
                <CommentsWrapper>
                  <HiOutlineChatBubbleOvalLeft />
                  <CommentsCount>0</CommentsCount>
                </CommentsWrapper>
              </div>
            </div>
          </>
        ) : (
          <>
            <span>보드 게시글 제목</span>
            <div>작성한 댓글 내용</div>
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
