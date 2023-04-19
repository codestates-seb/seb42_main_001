import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IRecommandBoards } from '../../../util/interfaces/boards.interface';
import { useAppSelector } from '../../../redux/hooks/hooks';

import BoardSuggestItem from './BoardSuggestItem';

function BoardSuggestList() {
  const { recommandBoards } = useAppSelector(
    (state) => state.boardDetail.detailData
  );

  return (
    <ListContainer>
      {recommandBoards?.map((el: IRecommandBoards) => (
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
