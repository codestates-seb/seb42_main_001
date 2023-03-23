import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks/hooks';

import TagsBoardContent from './TagsBoardContent';
import TagsBodyTitle from './TagsBodyTitle';

const TagsBodyBoard = () => {
  const listExistence = useAppSelector(state => state.tag.tagData.board);

  return (
    <>
      {listExistence?.length ? (
        <BodyBoardContainer>
          <TagsBodyTitle text={'Board'} />
          <TagsBoardContent />
        </BodyBoardContainer>
      ) : null}
    </>
  );
};

export default TagsBodyBoard;

const BodyBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
