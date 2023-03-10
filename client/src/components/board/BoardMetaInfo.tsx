import styled from 'styled-components';

import BoardTags from './BoardTags';

function BoardMetaInfo() {
  return (
    <BoardMetaInfoContainer>
      <BoardTags></BoardTags>
    </BoardMetaInfoContainer>
  );
}

export default BoardMetaInfo;

const BoardMetaInfoContainer = styled.div`
  width: 645px;
`;
