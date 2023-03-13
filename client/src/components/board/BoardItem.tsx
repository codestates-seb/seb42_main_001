import styled from 'styled-components';

import Card from '../UI/Card';
import BoardContents from './BoardContents';
import BoardMetaInfo from './BoardMetaInfo';
import BoardAuthorInfo from './BoardAuthorInfo';

function BoardItem() {
  return (
    <Card>
      <ItemContainer>
        <BoardAuthorInfo></BoardAuthorInfo>
        <BoardContents></BoardContents>
        <BoardMetaInfo></BoardMetaInfo>
      </ItemContainer>
    </Card>
  );
}

export default BoardItem;

const ItemContainer = styled.div`
  width: 695px;
  height: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
