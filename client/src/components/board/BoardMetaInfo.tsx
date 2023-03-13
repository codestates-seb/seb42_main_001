import styled from 'styled-components';

import BoardStats from './BoardStats';
import BoardTags from './BoardTags';

function BoardMetaInfo() {
  return (
    <BoardMetaInfoContainer>
      <BoardTags></BoardTags>
      <BoardStats></BoardStats>
    </BoardMetaInfoContainer>
  );
}

export default BoardMetaInfo;

const BoardMetaInfoContainer = styled.div`
  width: 645px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
