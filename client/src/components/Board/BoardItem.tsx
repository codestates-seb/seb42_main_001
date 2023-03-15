import styled from 'styled-components';

import Card from '../UI/Card';
import BoardContents from './BoardContents';
import BoardMetaInfo from './BoardMetaInfo';
import BoardAuthorInfo from './BoardAuthorInfo';

function BoardItem() {
  return (
    <MarginContainer>
      <Card>
        <ItemContainer>
          <BoardAuthorInfo />
          <BoardContents />
          <BoardMetaInfo />
        </ItemContainer>
      </Card>
    </MarginContainer>
  );
}

export default BoardItem;

const MarginContainer = styled.div`
  margin-bottom: var(--x-large);
`;

const ItemContainer = styled.div`
  padding: var(--large);
  width: 695px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 600px;
  }
`;
