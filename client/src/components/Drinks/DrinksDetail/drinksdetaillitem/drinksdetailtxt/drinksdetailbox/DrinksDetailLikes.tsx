import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { IDrinksDetailProps } from '../../../../../../util/interfaces/drinks.inerface';
import { useAppSelector } from '../../../../../../redux/hooks/hooks';
import { useNavigate } from 'react-router';

function DrinksDetailLikes({ drinksDetail }: IDrinksDetailProps) {
  const [likes, setlikes] = useState(false);
  const [login, setLogin] = useState(false);

  const { isLogin } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    setLogin(isLogin);
  }, [isLogin]);

  const handleLikesChange = () => {
    if (login) {
      setlikes((prev) => !prev);
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
      <span>{drinksDetail?.likeCount}</span>
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
