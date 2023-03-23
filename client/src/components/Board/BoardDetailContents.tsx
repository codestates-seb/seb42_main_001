import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { useAppSelector } from '../../redux/hooks/hooks';

function BoardDetailContents() {
  const { content } = useAppSelector((state) => state.boardDetail.detailData);

  return (
    <ContentsContainer>
      <Viewer initialValue={content || ''} />
    </ContentsContainer>
  );
}

export default BoardDetailContents;

const ContentsContainer = styled.div`
  font-size: var(--text-medium);
  line-height: var(--large);
  margin-bottom: var(--4x-large);
`;
