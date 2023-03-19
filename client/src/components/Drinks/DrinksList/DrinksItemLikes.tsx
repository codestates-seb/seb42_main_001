import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styled from "styled-components";
import { Likes } from "../../../interfaces/Drinks.inerface";

interface DrinksContentsProps {
  likesData: Likes[];
}

function DrinksItemLikes({ likesData }: DrinksContentsProps) {
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
  color: var(--color-main);
  display: flex;

  svg {
    font-size: var(--text-x-large);
    color: var(--color-main);
  }
`;
