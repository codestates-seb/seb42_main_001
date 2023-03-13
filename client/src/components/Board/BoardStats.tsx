import styled from 'styled-components';
import BoardLikes from './BoardLikes';
import BoardComments from './BoardComments';

function BoardStats() {
  return (
    <BoardStatsContainer>
      <BoardLikes />
      <BoardComments />
    </BoardStatsContainer>
  );
}

export default BoardStats;

const BoardStatsContainer = styled.div`
  margin-top: var(--medium);
  display: flex;
  align-items: center;
`;
