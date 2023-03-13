import styled from 'styled-components';

import { FaUserCircle } from 'react-icons/fa';

function BoardAuthorInfo() {
  return (
    <BoardAuthorInfoContainer>
      <BoardAuthorInfoImg>
        <FaUserCircle></FaUserCircle>
      </BoardAuthorInfoImg>
      <BoardAuthorInfoName>lampu</BoardAuthorInfoName>
      <BoardAuthorInfoCreatedAt>23.03.07</BoardAuthorInfoCreatedAt>
    </BoardAuthorInfoContainer>
  );
}

export default BoardAuthorInfo;

const BoardAuthorInfoContainer = styled.div`
  width: 645px;
  height: 100px;
  padding: 25px 0 25px 0;
  border-bottom: 0.5px solid #bababa;
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 4px 14px;
`;

const BoardAuthorInfoImg = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;

  > svg {
    width: 50px;
    height: 50px;
  }
`;

const BoardAuthorInfoName = styled.div`
  font-size: var(--small-font-size);
  font-weight: 500;
  line-height: 17px;
`;

const BoardAuthorInfoCreatedAt = styled.div`
  font-size: var(--small-font-size);
  font-weight: 500;
  line-height: 17px;
  color: #969696;
`;
