import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useAppSelector } from '../../../redux/hooks/hooks';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function BoardDetailContents() {
  const { content } = useAppSelector((state) => state.boardDetail.detailData);

  return (
    <ContentsContainer>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </ContentsContainer>
  );
}

export default BoardDetailContents;

const ContentsContainer = styled.div`
  font-size: var(--text-medium);
  line-height: var(--large);
  margin-bottom: var(--4x-large);
  img {
    max-width: 100%;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: var(--large);
    p {
      font-size: 3vw;
      line-height: 5vw;
    }
  }
`;
