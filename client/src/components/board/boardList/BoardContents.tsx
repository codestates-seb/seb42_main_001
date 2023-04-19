import styled from 'styled-components';
import { Viewer } from '@toast-ui/react-editor';
import { IBoardContents } from '../../../util/interfaces/boards.interface';

function BoardContents({ boardTitle, content }: IBoardContents) {
  return (
    <BoardContentsContainer>
      <BoardContentsTitle>{boardTitle}</BoardContentsTitle>
      <BoardContentsBody>
        <Viewer initialValue={content || ''} />
      </BoardContentsBody>
    </BoardContentsContainer>
  );
}

export default BoardContents;

const BoardContentsContainer = styled.div`
  margin: var(--medium) 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;

  @media only screen and (max-width: 768px) {
    margin: var(--x-small) 0;
  }
`;

const BoardContentsTitle = styled.div`
  margin-bottom: var(--x-small);
  font-size: var(--text-large);
  font-weight: var(--weight-large);
  @media only screen and (max-width: 768px) {
    font-size: 4vw;
  }
`;

const BoardContentsBody = styled.div`
  width: 100%;
  height: 150px;
  line-height: var(--medium);
  font-size: var(--text-small);
  font-weight: var(--weight-x-small);
  overflow: hidden;

  p {
    > img {
      max-height: 100px;
      padding: 10px 0;
    }
    @media only screen and (max-width: 768px) {
      font-size: 3vw !important;
    }
  }
`;
