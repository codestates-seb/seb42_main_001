import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/hooks';

import BoardItem from '../Board/BoardItem';

const TagsBoardContent = () => {
  const boardsList = useAppSelector(state => state.tag.tagData.board);

  return (
    <BoardContentContainer>
      {boardsList
        ? boardsList.map(ele => (
            <BoardItem key={ele.boardId} data={ele}></BoardItem>
          ))
        : null}
    </BoardContentContainer>
  );
};

export default TagsBoardContent;

const BoardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--large) var(--large) 0 var(--large);
`;
