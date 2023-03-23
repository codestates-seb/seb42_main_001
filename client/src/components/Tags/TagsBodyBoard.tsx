import styled from 'styled-components';
import TagsBoardContent from './TagsBoardContent';
import TagsBodyTitle from './TagsBodyTitle';

const TagsBodyBoard = () => {
  return (
    <BodyBoardContainer>
      <TagsBodyTitle text={'Board'} />
      <TagsBoardContent />
    </BodyBoardContainer>
  );
};

export default TagsBodyBoard;

const BodyBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
