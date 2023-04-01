import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { IDrinksDetailLike } from '../../../../../../util/interfaces/drinks.inerface';
import { useAppSelector } from '../../../../../../redux/hooks/hooks';
import { useNavigate } from 'react-router';

function DrinksDetailLikes({ drinksDetail, drinksLike }: IDrinksDetailLike) {
  const [likes, setlikes] = useState(false);
  const [login, setLogin] = useState(false);
  const [count, setCount] = useState(0);

  const { isLogin } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    setLogin(isLogin);
    if (drinksDetail) {
      setCount(drinksDetail.likeCount);
      setlikes(drinksLike);
    }
  }, [isLogin, drinksDetail, drinksLike]);

  const handleLikesChange = () => {
    if (login) {
      if (likes) {
        setCount((prev) => prev - 1);
        setlikes(false);
      } else {
        setCount((prev) => prev + 1);
        setlikes(true);
      }
    } else {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/signup');
    }
  };

  return (
    <LikesSize>
      {likes ? (
        <IoMdHeart onClick={handleLikesChange} />
      ) : (
        <IoMdHeartEmpty onClick={handleLikesChange} />
      )}
      <span>{count}</span>
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
