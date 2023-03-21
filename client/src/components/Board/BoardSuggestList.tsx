import { Link } from "react-router-dom";
import styled from "styled-components";

import BoardSuggestItem from "./BoardSuggestItem";

interface Props {
  recommandBoards?: Array<{
    boardId: number;
    boardTitle: string;
  }>;
}

function BoardSuggestList({ recommandBoards }: Props) {
  return (
    <ListContainer>
      {recommandBoards?.map((el) => (
        <Link to={`/board/detail/${el.boardId}`} key={el.boardId}>
          <BoardSuggestItem title={el.boardTitle} />
        </Link>
      ))}
    </ListContainer>
  );
}

export default BoardSuggestList;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
