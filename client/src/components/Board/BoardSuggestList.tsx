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
        <BoardSuggestItem key={el.boardId} title={el.boardTitle} />
      ))}
    </ListContainer>
  );
}

export default BoardSuggestList;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
