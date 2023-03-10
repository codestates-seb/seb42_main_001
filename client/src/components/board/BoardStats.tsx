import styled from 'styled-components';

import BoardLikes from './BoardLikes';
import BoardComments from './BoardComments';

function BoardStats() {
  return (
    <BoardStatsContainer>
      <BoardLikes></BoardLikes>
      <BoardComments></BoardComments>
    </BoardStatsContainer>
  );
}

export default BoardStats;

const BoardStatsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 12px 0 12px;
`;
