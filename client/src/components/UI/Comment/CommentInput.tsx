import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks/hooks';

import Button from '../Button';
import Card from '../Card';
import customAxios from '../../../api/customAxios';
import { useNavigate } from 'react-router';

interface CommentInputProps {
  drinkId?: number;
  boardId?: number;
}

function CommentInput({ drinkId, boardId }: CommentInputProps) {
  const [commentValue, setCommentValue] = useState('');
  const [Login, setLogin] = useState(false);

  const { isLogin } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    setLogin(isLogin);
  }, [isLogin]);

  const handleCommentValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };

  const handleDrinksPost = async () => {
    if (Login) {
      if (commentValue.trim() === '') {
        alert('댓글을 작성해주세요');
      } else {
        const newDrinks = {
          drinkId,
          commentContent: commentValue,
        };

        const newBoards = {
          boardId,
          commentContent: commentValue,
        };
        try {
          await customAxios.post(
            drinkId ? `/comments/drinks` : boardId ? `/comments/boards` : '',
            drinkId ? newDrinks : boardId ? newBoards : null
          );
          setCommentValue('');
          alert('성공적으로 작성되었습니다.');
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/signup');
    }
  };

  const handleInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleDrinksPost();
    }
  };

  return (
    <MainContainer>
      <section>
        <SearchContainer>
          <Card>
            <input
              onChange={handleCommentValueChange}
              onKeyDown={handleInputKey}
              value={commentValue}
              placeholder='댓글을 작성해 주세요'
            />
          </Card>
        </SearchContainer>
      </section>
      <Button
        type='submit'
        width={`--5x-large`}
        height={`--2x-large`}
        bgColor={`--color-main`}
        borderColor={`--color-main`}
        color={`--color-white`}
        onClick={handleDrinksPost}
      >
        submit
      </Button>
    </MainContainer>
  );
}

export default CommentInput;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--x-large);

  section {
    width: 90%;
    margin-right: var(--medium);
  }
`;

const SearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 60px;
    border: none;
    outline: none;
    border-radius: var(--2x-small);
    padding-left: var(--medium);
  }
`;
