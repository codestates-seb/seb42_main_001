import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';

import customAxios from '../../api/customAxios';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import {
  boardLikeCheck,
  boardLikeUncheck,
} from '../../redux/slice/board/boardListSlice';
import {
  boardDetailLike,
  boardDetailUnLike,
} from '../../redux/slice/board/boardDetail';
import { useNavigate } from 'react-router';

interface BoardLikesProps {
  boardId: number;
  likeCount?: number;
  like: boolean;
}

function BoardLikes({ likeCount, like, boardId }: BoardLikesProps) {
  const [isLike, setIsLike] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const login = useAppSelector((state) => state.auth.isLogin);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLike(like);
    setIsLogin(login);
  }, [like, login]);

  const handleLikeChange = () => {
    if (isLogin) {
      if (isLike) {
        customAxios
          .delete(`/likes/boards/${boardId}`)
          .then((res) => {
            setIsLike(false);
            dispatch(boardLikeUncheck({ data: false, boardId }));
            dispatch(boardDetailUnLike({ data: false }));
          })
          .catch((err) => console.log(Error, err));
      } else {
        customAxios
          .post(`/likes/boards/${boardId}`)
          .then((res) => {
            setIsLike(true);
            dispatch(boardLikeCheck({ data: true, boardId }));
            dispatch(boardDetailLike({ data: true }));
          })
          .catch((err) => console.log(Error, err));
      }
    } else {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/signup');
    }
  };
  return (
    <LikesWrapper>
      {isLike ? (
        <IoMdHeart onClick={handleLikeChange} />
      ) : (
        <IoMdHeartEmpty onClick={handleLikeChange} />
      )}
      <LikesCount>{likeCount}</LikesCount>
    </LikesWrapper>
  );
}

export default BoardLikes;

const LikesWrapper = styled.div`
  margin-right: var(--medium);
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    margin-right: 3vw;
  }

  svg {
    margin-right: 5px;
    color: var(--color-main);
    font-size: var(--medium);

    @media only screen and (max-width: 768px) {
      font-size: 4vw;
    }
  }
`;

const LikesCount = styled.div`
  font-size: var(--x-small);
  font-weight: var(--weight-medium);
  color: var(--color-main);

  @media only screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;
