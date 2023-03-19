import styled from "styled-components";

import { FaUserCircle } from "react-icons/fa";

interface BoardAuthorInfoProps {
  userName?: string;
  userImage?: string;
  date?: string;
}

function BoardAuthorInfo({ userName, userImage, date }: BoardAuthorInfoProps) {
  return (
    <BoardAuthorInfoContainer>
      {userImage ? <img src={userImage} alt="userImage" /> : <FaUserCircle />}
      <BoardAuthorInfoName>
        {userName}
        <p>{date}</p>
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

  > svg {
    width: 40px;
    height: 40px;
  }
`;

const BoardAuthorInfoName = styled.div`
  margin-left: var(--xx-small);
  font-size: var(--x-small);
  font-weight: var(--weight-large);
  line-height: 17px;

  p {
    line-height: 17px;
    color: var(--color-sub-gray);
    font-weight: var(--weight-x-small);
  }
`;
