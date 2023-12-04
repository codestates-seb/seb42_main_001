import styled from 'styled-components';

import BoardStats from './BoardStats';
import BoardTags from '../BoardTags';
import { IBoardMetaInfo } from '../../../util/interfaces/boards.interface';

function BoardMetaInfo({
  tags,
  likeCount,
  commentCount,
  like,
  boardId,
}: IBoardMetaInfo) {
  return (
    <BoardMetaInfoContainer>
      <BoardTags tags={tags} />
      <BoardStats
        likeCount={likeCount}
        commentCount={commentCount}
        like={like}
        boardId={boardId}
      />
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
