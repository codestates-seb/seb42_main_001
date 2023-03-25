import styled from 'styled-components';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { useState } from 'react';
import axios from 'axios';

import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import {
  boardLikeCheck,
  boardLikeUncheck,
} from '../../redux/slice/board/boardListSlice';
import {
  boardDetailLike,
  boardDetailUnLike,
} from '../../redux/slice/board/boardDetail';

interface BoardLikesProps {
  boardId: number;
  like?: number;
  likes?: boolean;
}

function BoardLikes({ like, likes, boardId }: BoardLikesProps) {
  const [isLike, setIsLike] = useState(likes);
  const dispatch = useAppDispatch();

  const handleLikeChange = () => {
    if (isLike) {
      axios
        .delete(`/likes/boards/${boardId}`)
        .then((res) => {
          setIsLike(false);
          dispatch(boardLikeUncheck({ data: false, boardId }));
          dispatch(boardDetailUnLike({ data: false }));
        })
        .catch((err) => console.log(Error, err));
    } else {
      axios
        .post(`/likes/boards/${boardId}`)
        .then((res) => {
          setIsLike(true);
          dispatch(boardLikeCheck({ data: true, boardId }));
          dispatch(boardDetailLike({ data: true }));
        })
        .catch((err) => console.log(Error, err));
    }
  };
  return (
    <LikesWrapper>
      {isLike ? (
        <IoMdHeart onClick={handleLikeChange} />
      ) : (
        <IoMdHeartEmpty onClick={handleLikeChange} />
      )}
      <LikesCount>{like}</LikesCount>
    </LikesWrapper>
  );
}

export default BoardLikes;

const LikesWrapper = styled.div`
  margin-right: var(--medium);
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
