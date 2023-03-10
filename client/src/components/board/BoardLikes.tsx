import styled from 'styled-components';

import { FaRegHeart } from 'react-icons/fa';

function BoardLikes() {
  return (
    <LikesWrapper>
      <IconWrapper>
        <FaRegHeart></FaRegHeart>
      </IconWrapper>
      <LikesCount>12</LikesCount>
    </LikesWrapper>
  );
}

export default BoardLikes;

const LikesWrapper = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const LikesCount = styled.div``;
