import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styled from "styled-components";
import { DrinksProps } from "../../../interfaces/Drinks.inerface";
import axios from "axios";

function DrinksItemLikes({ drinksData, likesData }: DrinksProps) {
  const [likes, setlikes] = useState(true);

  const drinkId: number = drinksData.drinkId;

  const likesValue = likesData.filter(el => {
    return el.drinkId === drinkId
  })

  let isDrinkLiked: boolean = false;

  for (let i = 0; i < likesValue.length; i++) {
    for (let j = 0; j < drinkId; i++) {
      if (likesData[i].drinkId === drinkId) {
        isDrinkLiked = true;
        break;
      }
    }
  }

  const handleLikesData = async () => {
    if (likes) {
      try {
        await axios.post(`/likes/drinks/${drinkId}`);
        setlikes((prev) => !prev);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try {
        await axios.delete(`/likes/drinks/${drinkId}`);
        setlikes((prev) => !prev);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <LikesSize>
      {isDrinkLiked
        ? <IoMdHeart onClick={handleLikesData} />
        : <IoMdHeartEmpty onClick={handleLikesData} />
      }
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
