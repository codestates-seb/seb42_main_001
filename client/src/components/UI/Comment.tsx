import styled from 'styled-components';

import Card from './Card';
import { FaUserCircle } from 'react-icons/fa';

function Comment() {
  return (
    <Card>
      <ItemContainer>
        <CommentAuthorInfo>
          <CommentAuthorInfoImg>
            <FaUserCircle></FaUserCircle>
          </CommentAuthorInfoImg>
          <CommentAuthorName>lampu</CommentAuthorName>
          <CommentCreatedAt>23.03.07</CommentCreatedAt>
        </CommentAuthorInfo>
        <CommentContents>
          아티클에 있는 안주를 다 드셔 보셨나요?? 멋지십니다 굿
        </CommentContents>
      </ItemContainer>
    </Card>
  );
}

export default Comment;

const ItemContainer = styled.div`
  padding: 30px 35px 30px 35px;
  width: 935px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CommentAuthorInfo = styled.div`
  margin-bottom: 20px;
  height: 50px;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 4px 14px;
`;

const CommentAuthorInfoImg = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;

  > svg {
    width: 50px;
    height: 50px;
  }
`;

const CommentAuthorName = styled.div`
  font-size: var(--text-small);
  font-weight: 500;
  line-height: 17px;
`;

const CommentCreatedAt = styled.div`
  font-size: var(--text-small);
  font-weight: 500;
  line-height: 17px;
  color: var(--color-sub-light-gray);
`;

const CommentContents = styled.div`
  font-size: var(--text-medium);
  font-weight: 500;
  line-height: 30px;
`;
