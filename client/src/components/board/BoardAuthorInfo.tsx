import styled from 'styled-components';

import convertTime from '../../util/convertTime';
import woodford from '../../assets/img/woodford.jpg';
import { IBoardAuthorInfo } from '../../util/interfaces/boards.interface';

function BoardAuthorInfo({
  memberName,
  profileImageUrl,
  createdAt,
}: IBoardAuthorInfo) {
  return (
    <BoardAuthorInfoContainer>
      {profileImageUrl ? (
        <img src={profileImageUrl} alt='userImage' />
      ) : (
        <img src={woodford} alt='userImage' />
      )}
      <BoardAuthorInfoName>
        {memberName}
        <p>{convertTime(createdAt)}</p>
      </BoardAuthorInfoName>
    </BoardAuthorInfoContainer>
  );
}

export default BoardAuthorInfo;

const BoardAuthorInfoContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-sub-light-gray);
  padding-bottom: var(--small);
  display: flex;
  align-items: center;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const BoardAuthorInfoName = styled.div`
  margin-left: var(--2x-small);
  font-size: var(--x-small);
  font-weight: var(--weight-large);
  line-height: 17px;

  p {
    line-height: 17px;
    color: var(--color-sub-gray);
    font-weight: var(--weight-x-small);
  }
`;
