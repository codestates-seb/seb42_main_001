import React, { useState } from "react";
import styled from "styled-components";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

function DrinksDetailLikes() {
  const [likes, setlikes] = useState(false);

  const handleLikesChange = () => {
    setlikes((prev) => !prev);
  };

  return (
    <LikesSize>
      {likes ? (
        <IoMdHeart onClick={handleLikesChange} />
      ) : (
        <IoMdHeartEmpty onClick={handleLikesChange} />
      )}
      <span>10</span>
    </LikesSize>
  );
}

export default DrinksDetailLikes;

const LikesSize = styled.div`
  color: var(--color-main);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: var(--text-x-large);
    color: var(--color-main);
  }

  span {
    font-size: var(--text-small);
    margin-left: var(--3x-small);
  }
`;
