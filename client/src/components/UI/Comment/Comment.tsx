import styled from 'styled-components';
import React, { useState } from 'react';
import Card from '../Card';
import CommentModal from './CommentModal';
import More from '../More';
import Button from '../Button';
import customAxios from '../../../api/customAxios';
import convertTime from '../../../util/convertTime';
import { IComments } from '../../../util/interfaces/boards.interface';

interface ICommentProps {
  comments?: IComments;
}

function Comment({ comments }: ICommentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [commentContent, setCommentContent] = useState(
    comments?.commentContent
  );

  const handleModalOpen = () => setIsOpen(!isOpen);

  const handleEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  const handleEditfalse = () => {
    if (window.confirm('정말로 수정하시겠습니까')) {
      if (comments?.drinkCommentId) {
        const editComment = {
          commentContent,
        };
        customAxios.patch(
          `/comments/drinks/${comments?.drinkCommentId}`,
          editComment
        );
        setIsEdit((prev) => !prev);
        alert('성공적으로 수정했습니다.');
        window.location.reload();
      } else if (comments?.boardCommentId) {
        const editComment = {
          commentContent,
        };
        customAxios.patch(
          `/comments/boards/${comments?.boardCommentId}`,
          editComment
        );
        setIsEdit((prev) => !prev);
        alert('성공적으로 수정했습니다.');
        window.location.reload();
      }
    }
  };

  return (
    <MainContainer>
      <Card>
        <SubContainer>
          <CommentAuthorInfo>
            <CommentAuthorInfoImg />
            <CommentAuthorContents>
              <h4>{comments?.displayName}</h4>
              <span>{convertTime(comments?.createAt)}</span>
            </CommentAuthorContents>
            <div>
              <More handleModalOpen={handleModalOpen} />
            </div>
            {isOpen ? (
              <CommentModal
                drinkCommentId={comments?.drinkCommentId}
                boardCommentId={comments?.boardCommentId}
                memberId={comments?.memberId}
                setIsEdit={setIsEdit}
                handleModalOpen={handleModalOpen}
              />
            ) : null}
          </CommentAuthorInfo>
          <CommentContents>{comments?.commentContent}</CommentContents>
          {isEdit ? (
            <CommentEditContainer>
              <CommentEditInput>
                <input value={commentContent} onChange={handleEditInput} />
              </CommentEditInput>
              <CommentEditButton>
                <Button
                  type='submit'
                  color='--color-white'
                  bgColor='--color-main'
                  onClick={handleEditfalse}
                  borderColor='--color-main'
                >
                  {'submit'}
                </Button>
              </CommentEditButton>
            </CommentEditContainer>
          ) : null}
        </SubContainer>
      </Card>
    </MainContainer>
  );
}
export default Comment;

const MainContainer = styled.div`
  width: 100%;
  margin-bottom: var(--medium);
`;

const SubContainer = styled.div`
  width: 100%;
  padding: var(--large);
`;

const CommentAuthorInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: var(--text-small);
  position: relative;

  span {
    margin-top: 4px;
    font-size: var(--text-small);
  }

  svg {
    cursor: pointer;
  }
`;

const CommentAuthorInfoImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: var(--large);
  background-color: var(--color-sub-light-gray);
`;

const CommentAuthorContents = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: var(--x-small);

  span {
    color: var(--color-sub-gray);
  }
`;

const CommentContents = styled.div`
  width: 100%;
  height: 100%;
  padding-top: var(--medium);
  padding-left: var(--3x-small);
`;

const CommentEditContainer = styled.div`
  padding-left: var(--3x-small);
`;

const CommentEditInput = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 60px;
    border: 1px solid var(--color-sub-light-gray);
    outline: none;
    border-radius: var(--2x-small);
    padding-left: var(--medium);
    margin: var(--medium) 0;
  }
`;

const CommentEditButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
