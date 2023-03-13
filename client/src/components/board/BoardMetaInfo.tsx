import styled from 'styled-components';

import BoardStats from './BoardStats';
import BoardTags from './BoardTags';

function BoardMetaInfo() {
  return (
    <BoardMetaInfoContainer>
      <BoardTags />
      <BoardStats />
    </BoardMetaInfoContainer>
  );
}

export default BoardMetaInfo;

const BoardMetaInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
