import styled from 'styled-components';
import BoardLikes from '../BoardLikes';
import BoardComments from '../BoardComments';

interface BoardStatsProps {
  boardId: number;
  likeCount: number;
  commentCount: number;
  like: boolean;
}

function BoardStats({
  likeCount,
  commentCount,
  like,
  boardId,
}: BoardStatsProps) {
  return (
    <BoardStatsContainer>
      <BoardLikes likeCount={likeCount} like={like} boardId={boardId} />
      <BoardComments commentCount={commentCount} />
    </BoardStatsContainer>
  );
}

export default BoardStats;

const BoardStatsContainer = styled.div`
  margin-top: var(--medium);
  display: flex;
  align-items: center;
`;
