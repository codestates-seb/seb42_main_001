import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styled from "styled-components";

function DrinksItemLikes() {
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
    </LikesSize>
  );
}

export default DrinksItemLikes;

const LikesSize = styled.div`
  font-size: var(--text-x-large);
  color: var(--color-main);
  display: flex;

  svg {
    color: var(--color-main);
  }
`;
