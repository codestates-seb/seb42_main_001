import React, { useState, useEffect } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import { IDrinksProps } from "../../../util/interfaces/drinks.inerface";
import { setLikes } from '../../../redux/slice/drinks/drinksListSlice'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hooks'
import { setIsLoading } from '../../../redux/slice/drinks/drinksListSlice'

function DrinksItemLikes({ drinksData }: IDrinksProps) {
  const { likesData } = useAppSelector((state) => state.drinkslist);
  const dispatch = useAppDispatch();

  const [like, setLike] = useState(false)

  useEffect(() => {
    const isDrinkLiked: boolean = likesData.some(el => el.drinkId === drinksData.drinkId);
    setLike(isDrinkLiked)
  }, [drinksData.drinkId, likesData])

  const handleLikesData = async () => {
    if (like) {
      try {
        await axios.delete(`/likes/drinks/${drinksData.drinkId}`);
        dispatch(setLikes());
        setLike(false);
        dispatch(setIsLoading());
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post(`/likes/drinks/${drinksData.drinkId}`);
        dispatch(setLikes());
        setLike(true);
        dispatch(setIsLoading());
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <LikesSize>
      {like
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
