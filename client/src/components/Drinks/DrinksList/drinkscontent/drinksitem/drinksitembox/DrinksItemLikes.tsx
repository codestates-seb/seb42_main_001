import { useState, useEffect } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import styled from 'styled-components';

import customAxios from '../../../../../../api/customAxios';
import { IDrinksProps } from '../../../../../../util/interfaces/drinks.inerface';
import { setLikes } from '../../../../../../redux/slice/drinks/drinksListSlice';
import {
  useAppSelector,
  useAppDispatch,
} from '../../../../../../redux/hooks/hooks';
import { setIsLoading } from '../../../../../../redux/slice/drinks/drinksListSlice';
import { useNavigate } from 'react-router';

function DrinksItemLikes({ drinksData }: IDrinksProps) {
  const { likesData } = useAppSelector((state) => state.drinkslist);
  const isLogin = useAppSelector((state) => state.auth.isLogin);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const isDrinkLiked: boolean = likesData.some(
      (el) => el.drinkId === drinksData.drinkId
    );
    setLike(isDrinkLiked);
    setLogin(isLogin);
  }, [drinksData.drinkId, likesData, isLogin]);

  const handleLikesData = async () => {
    if (login) {
      if (like) {
        try {
          await customAxios.delete(`/likes/drinks/${drinksData.drinkId}`);
          dispatch(setLikes());
          setLike(false);
          dispatch(setIsLoading());
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await customAxios.post(`/likes/drinks/${drinksData.drinkId}`);
          dispatch(setLikes());
          setLike(true);
          dispatch(setIsLoading());
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/signup');
    }
  };

  return (
    <LikesSize>
      {like ? (
        <IoMdHeart onClick={handleLikesData} />
      ) : (
        <IoMdHeartEmpty onClick={handleLikesData} />
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
