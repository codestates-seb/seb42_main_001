import styled from "styled-components";
import { useState } from "react";

import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import axios from "axios";

interface BoardLikesProps {
  boardId?: number;
  like: number | undefined;
  likes?: boolean;
}

function BoardLikes({ like, likes, boardId }: BoardLikesProps) {
  const [isLike, setIsLike] = useState(likes);

  const handleLikeChange = () => {
    if (isLike) {
      axios
        .delete(`/likes/boards/${boardId}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
            Refresh: process.env.Refresh,
          },
        })
        .then((res) => {
          setIsLike((prev) => !prev);
          window.location.reload();
        })
        .catch((err) => console.log(Error, err));
    } else {
      axios
        .post(
          `/likes/boards/${boardId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
              Refresh: process.env.Refresh,
            },
          }
        )
        .then((res) => {
          setIsLike((prev) => !prev);
          window.location.reload();
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
