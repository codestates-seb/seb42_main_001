import styled from 'styled-components';
import BoardLikes from '../BoardLikes';
import BoardComments from '../BoardComments';

interface BoardStatsProps {
  boardId: number;
  like: number;
  comment: number;
  likes: boolean;
}

function BoardStats({ like, comment, likes, boardId }: BoardStatsProps) {
  return (
    <BoardStatsContainer>
      <BoardLikes like={like} likes={likes} boardId={boardId} />
      <BoardComments comment={comment} />
    </BoardStatsContainer>
  );
}

export default BoardStats;

const BoardStatsContainer = styled.div`
  margin-top: var(--medium);
  display: flex;
  align-items: center;
`;
