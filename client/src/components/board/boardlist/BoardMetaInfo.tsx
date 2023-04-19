import styled from 'styled-components';

import BoardStats from './BoardStats';
import BoardTags from '../BoardTags';

interface BoardMetaInfoProps {
  boardId: number;
  tags: Array<{
    tagId: number;
    tagName: string;
  }>;
  likeCount: number;
  like: boolean;
  commentCount: number;
}

function BoardMetaInfo({
  tags,
  likeCount,
  commentCount,
  like,
  boardId,
}: BoardMetaInfoProps) {
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
