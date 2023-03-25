import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import styled from 'styled-components';
import axios from 'axios';
import { IDrinksProps } from '../../../util/interfaces/drinks.inerface';
import { setLikes } from '../../../redux/slice/drinks/drinksListSlice';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hooks';

function DrinksItemLikes({ drinksData }: IDrinksProps) {
  const { likesData } = useAppSelector((state) => state.drinkslist);
  const dispatch = useAppDispatch();

  const isDrinkLiked: boolean = likesData.some(
    (el) => el.drinkId === drinksData.drinkId
  );

  const handleLikesData = async () => {
    if (isDrinkLiked) {
      try {
        await axios.delete(`/likes/drinks/${drinksData.drinkId}`);
        dispatch(setLikes());
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post(`/likes/drinks/${drinksData.drinkId}`);
        dispatch(setLikes());
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <LikesSize>
      {isDrinkLiked ? (
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
