import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styled from "styled-components";
import { DrinksProps } from "../../../interfaces/Drinks.inerface";

// interface DrinksProps {
//   drinksData?: Drinks;
//   likesData?: number;
// }

function DrinksItemLikes({ drinksData, likesData }: DrinksProps) {
  const [likes, setlikes] = useState(false);

  const handleLikesChange = () => {
    setlikes((prev) => !prev);
  };

  // if (drinksData.drinkId === likesData)

  // console.log(likesData.drinkId)

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
