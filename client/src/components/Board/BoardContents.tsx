import styled from 'styled-components';
import { Viewer } from '@toast-ui/react-editor';

interface BoardContentsProps {
  title?: string;
  content?: string;
}

function BoardContents({ title, content }: BoardContentsProps) {
  return (
    <BoardContentsContainer>
      <BoardContentsTitle>{title}</BoardContentsTitle>
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
  height: 100px;
  line-height: var(--medium);
  font-size: var(--text-small);
  font-weight: var(--weight-x-small);
  overflow: hidden;
  > div {
    > div {
      > p {
        @media only screen and (max-width: 768px) {
          font-size: 3vw !important;
        }
      }
    }
  }
`;
