import styled from "styled-components";
import BoardLikes from "./BoardLikes";
import BoardComments from "./BoardComments";

interface BoardStatsProps {
  like: number;
  comment: number;
}

function BoardStats({ like, comment }: BoardStatsProps) {
  return (
    <BoardStatsContainer>
      <BoardLikes like={like} />
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
