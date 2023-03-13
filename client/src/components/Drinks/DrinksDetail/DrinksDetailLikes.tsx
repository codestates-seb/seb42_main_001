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
      <span>10</span>
      {likes ? (
        <IoMdHeart onClick={handleLikesChange} />
      ) : (
        <IoMdHeartEmpty onClick={handleLikesChange} />
      )}
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
  }
`;
